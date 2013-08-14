var Banque = {
  goToMain: function() {
    $('#back-to-main').hide();
    $('#accounts-field').show();
    $('#new-account').show();
    $('#deposit').show();
    $('#withdraw').show();
    $.ajax({
      url: "/accounts", type: "get", dataType: "script"
    })
  },

  // goBackToMain: function() {
  //   $('#back-to-main').click(function() {
  //     Banque.toAndFromAction();
  //   });
  // },

  toAction: function() {
    $('#accounts-field').hide();
    $('#new-account').hide();
    $('#deposit').hide();
    $('#withdraw').hide();
    $('#back-to-main').show();
  },

  newAccount: function() {
    $('#new-account').click(function() {
      Banque.toAction();
      Banque.newAccountForm();
      // append new account form to index page
    });
  },

  makeDeposit: function() {
    $('#deposit').click(function() {
      Banque.toAction();
      // append deposit form to index page
    });
  },

  makeWithdrawal: function() {
    $('#withdraw').click(function() {
      Banque.toAction();
      // append withdrawal/transfer form to index page
    });
  },

  buttonFunctions: function() {
    Banque.newAccount();
    Banque.makeDeposit();
    Banque.makeWithdrawal();
  },

  newAccountForm: function() {
    $.ajax({
      url: "/accounts/new", type: "get", dataType: "script"
    })
  }
}


window.onload = function() {
  Banque.goToMain();
  Banque.buttonFunctions();
}