<template>
  <div class="item-list__container">
    <h3>{{ name }} List</h3>
    <input
      type="text"
      name=""
      id=""
      :placeholder="name + ' name'"
      v-model="item"
    />
    <br />
    <div class="item-list_buttons">
      <button type="button" @click="addItem">Add</button>
      <button type="button" @click="removeItem">Remove</button>
    </div>
    <br />
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import MixinList from "@/mixins/MixinList";

export default {
  name: "MovieList",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  mixins: [MixinList],
};
</script>

<style>
.item-list__container {
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
}

.item-list__container h3 {
  text-align: center;
}

.item-list_buttons {
  display: flex;
}

button {
  flex: 1;
}
</style>
