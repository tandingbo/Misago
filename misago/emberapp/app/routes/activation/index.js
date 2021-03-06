import MisagoRoute from 'misago/routes/misago';
import ResetScroll from 'misago/mixins/reset-scroll';

export default MisagoRoute.extend(ResetScroll, {
  formTitle: gettext('Request activation link'),
  formTemplate: 'activation.request-link',

  sentTitle: gettext('Activation link sent'),
  sentTemplate: 'activation.link-sent',

  renderTemplate: function() {
    this.render(this.get('formTemplate'));
  },

  actions: {
    didTransition: function() {
      this.set('title', this.get('formTitle'));
    },

    showSentPage: function(linkRecipient) {
      this.set('title', this.get('sentTitle'));
      this.render(this.get('sentTemplate'), {
        model: linkRecipient
      });
    },

    retry: function() {
      this.send('didTransition');
      this.renderTemplate();
    }
  }
});
