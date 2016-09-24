var db = firebase.database()

var vm = new Vue({
  el: '#app',
  firebase: {
    decks: db.ref('decks/'),
  },
  data: {
    newDeck: ''
  },
  methods: {
    addDeck: function () {
      var deck = this.newDeck.trim()
      if (deck) {
        db.ref('decks/').push({ title: deck });
        this.newDeck = '';
      }
    },
    removeDeck: function (key) {
      db.ref('decks/').child(key).remove()
    }
  }
})