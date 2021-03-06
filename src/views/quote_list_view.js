import Backbone from 'backbone';
import QuoteView from './quote_view';
import Quote from '../models/quote';

const QuoteListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render)
    this.bus = params.bus;
  },

  render() {
    this.$('#quotes').empty()
    this.model.each((quote) => {
      const quoteView = new QuoteView({
        model: quote,
        template: this.template,
        tagName: 'li',
        className: 'quote',
        bus: this.bus,
      });
      // this.bus.trigger('automatic_trade', this.model)
      this.$('#quotes').append(quoteView.render().$el)
    })
    this.bus.trigger('quotes', this.model);
  },
    // events: {
    //
    // },
  })

  export default QuoteListView
