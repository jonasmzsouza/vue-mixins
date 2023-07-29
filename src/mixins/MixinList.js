export default {
  data: () => ({
    items: [],
    item: "",
  }),
  methods: {
    addItem() {
      if (this.item) {
        this.items.push(this.item);
        this.item = "";
      }
    },
    removeItem() {
      this.items.pop();
    },
  },
};
