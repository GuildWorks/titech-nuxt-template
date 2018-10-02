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
        <v-checkbox :value="remaining === 0" @change="allDone($event)" label="All Check"></v-checkbox>
        <v-list
          subheader
          two-line
        >
          <v-subheader>To Do List</v-subheader>
          <v-list-tile v-for="todo in filteredTodos" :key="todo.id">
            <v-list-tile-action>
              <input type="checkbox" :checked="todo.completed" @change="changeCompleted($event.target.checked, todo)">
            </v-list-tile-action>

            <v-list-tile-content v-if="todo.id === editingToDoId">
              <v-text-field
                autofocus autocomplete="off"
                :value="todo.title"
                @blur="doneEdit($event.target.value, todo)"
                @keyup.enter="doneEdit($event.target.value, todo)"
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
import { mapGetters } from "vuex";

export default {
  name: "ToDo",
  data() {
    return {
      newTodo: "",
      editedTodo: null,
      visibility: "all",
      editingToDoId: null
    };
  },
  computed: {
    ...mapGetters({
      todos: "todos/ALL",
      activeTodos: "todos/ACTIVE"
    }),
    filteredTodos: function() {
      return this.$store.getters[`todos/${this.visibility.toUpperCase()}`];
    },
    remaining: function() {
      return this.activeTodos.length;
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
      const todo = {
        id: this.todos.length,
        title: value,
        completed: false
      };
      this.$store.dispatch("todos/CREATE_TODO", todo);
      this.newTodo = "";
    },

    removeTodo(todo) {
      this.$store.dispatch("todos/REMOVE_TODO", todo.id);
    },

    editTodo(todo) {
      this.editingToDoId = todo.id;
      this.beforeEditCache = todo.title;
      this.editedTodo = todo;
    },

    doneEdit(value, todo) {
      this.editingToDoId = null;
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      const _todo = Object.assign({}, todo, { title: value.trim() });
      if (!_todo.title) {
        this.removeTodo(todo);
      } else {
        this.$store.dispatch("todos/UPDATE_TODO", _todo);
      }
    },

    cancelEdit(todo) {
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
    },

    removeCompleted() {
      this.$store.dispatch("todos/REMOVE_COMPLETED");
    },

    allDone(value) {
      if (value) {
        this.$store.dispatch("todos/ALL_CHECKED");
      } else {
        this.$store.dispatch("todos/ALL_UNCHECKED");
      }
    },

    changeCompleted(value, todo) {
      const _todo = Object.assign({}, todo, { completed: value });
      this.$store.dispatch("todos/UPDATE_TODO", _todo);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
