/* global Handlebars */

var inventory;

(function() {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function() {
      var date = new Date();
      document.querySelector("#order_date").textContent = date.toUTCString();
    },
    cacheTemplate: function() {
      var iTmpl = document.querySelector("#inventory_item").innerText;
      this.template = Handlebars.compile(iTmpl);
    },
    add: function() {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      var found_item;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },
    update: function(itemElement) {
      var id = this.findID(itemElement),
          item = this.get(id);

      item.name = itemElement.querySelector("[name^=item_name]").value;
      item.stock_number = itemElement.querySelector("[name^=item_stock_number]").value;
      item.quantity = itemElement.querySelector("[name^=item_quantity]").value;
    },
    newItem: function(e) {
      e.preventDefault();
      var item = this.add(),
          itemHtml = this.template(item);

      document.querySelector("#inventory").insertAdjacentHTML('beforeend', itemHtml);
    },
    findParent: function(e) {
      return e.target.closest("tr");
    },
    findID: function(item) {
      return Number(item.querySelector("input[type=hidden]").value);
    },
    deleteItem: function(e) {
      e.preventDefault();
      var item = this.findParent(e);
      item.remove();

      this.remove(this.findID(item));
    },
    updateItem: function(e) {
      var item = this.findParent(e);

      this.update(item);
    },
    bindEvents: function() {
      document.querySelector("#add_item").addEventListener("click", this.newItem.bind(this));
      document.querySelector("#inventory").addEventListener("click", (e) => {
        if (e.target.matches("a.delete")) {
          this.deleteItem.call(this, e);
        }
      });
      document.querySelector("#inventory").addEventListener("focusout", (e) => {
        this.updateItem.call(this, e);
      });
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  inventory.init();
});
