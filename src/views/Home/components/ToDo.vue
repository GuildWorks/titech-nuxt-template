<template>
  <div>
    <section>
      <header>
        <h1>todos</h1>
        <v-text-field
          autofocus autocomplete="off"
          v-model="newTodo"
          @keyup.enter="addTodo"
          placeholder="To Do Title"
        ></v-text-field>
      </header>
      <section v-show="todos.length" v-cloak>
        <v-checkbox v-model="allDone" label="All Check"></v-checkbox>
        <v-list
          subheader
          two-line
        >
          <v-subheader>To Do List</v-subheader>
          <v-list-tile v-for="todo in filteredTodos" :key="todo.id">
            <v-list-tile-action>
              <v-checkbox v-model="todo.completed"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content v-if="todo.id === editingToDoId">
              <v-text-field
                autofocus autocomplete="off"
                v-model="todo.title"
                @blur="doneEdit(todo)"
                @keyup.enter="doneEdit(todo)"
                @keyup.esc="cancelEdit(todo)"
                placeholder="To Do Title"
              ></v-text-field>
            </v-list-tile-content>
            <v-list-tile-content v-else>
              <v-list-tile-title @dblclick="editTodo(todo)">{{ todo.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple @click="removeTodo(todo)">
                <v-icon color="grey lighten-1">delete</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </section>
      <footer v-show="todos.length" v-cloak>
        <span>
          <strong>{{ remaining }}</strong> {{ remaining | pluralize }} left
        </span>
        <v-select
          v-model="visibility"
          :items="['all','active','completed']"
          label="Filter"
        ></v-select>
        <v-btn color="error" @click="removeCompleted" :disabled="remaining != 0">Clear completed</v-btn>
      </footer>
    </section>
  </div>
</template>

<script>
const filters = {
  all: todos => {
    return todos;
  },
  active: todos => {
    return todos.filter(todo => {
      return !todo.completed;
    });
  },
  completed: todos => {
    return todos.filter(todo => {
      return todo.completed;
    });
  }
};

export default {
  name: "ToDo",
  data() {
    return {
      todos: [],
      newTodo: "",
      editedTodo: null,
      visibility: "all",
      editingToDoId: null
    };
  },
  computed: {
    filteredTodos: function() {
      return filters[this.visibility](this.todos);
    },
    remaining: function() {
      return filters.active(this.todos).length;
    },
    allDone: {
      get: function() {
        return this.remaining === 0;
      },
      set: function(value) {
        this.todos.forEach(todo => {
          todo.completed = value;
        });
      }
    }
  },

  filters: {
    pluralize: function(n) {
      return n === 1 ? "item" : "items";
    }
  },
  methods: {
    addTodo() {
      const value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      this.todos.push({
        id: this.todos.length,
        title: value,
        completed: false
      });
      this.newTodo = "";
    },

    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },

    editTodo(todo) {
      this.editingToDoId = todo.id;
      this.beforeEditCache = todo.title;
      this.editedTodo = todo;
    },

    doneEdit(todo) {
      this.editingToDoId = null;
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      todo.title = todo.title.trim();
      if (!todo.title) {
        this.removeTodo(todo);
      }
    },

    cancelEdit(todo) {
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
    },

    removeCompleted() {
      this.todos = filters.active(this.todos);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
