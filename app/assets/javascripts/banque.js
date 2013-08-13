var Banque = {
  hideBackToMain: function() {
    $('#back-to-main').hide();
  },

  toAndFromAction: function() {
    $('#accounts-field').toggle();
    $('#new-account').toggle();
    $('#deposit').toggle();
    $('#withdraw').toggle();
    $('#back-to-main').toggle();
  },

  newAccount: function() {
    $('#new-account').click(function() {
      Banque.toAndFromAction();
      Banque.newAccountForm();
      // append new account form to index page
    });
  },

  makeDeposit: function() {
    $('#deposit').click(function() {
      Banque.toAndFromAction();
      // append deposit form to index page
    });
  },

  makeWithdrawal: function() {
    $('#withdraw').click(function() {
      Banque.toAndFromAction();
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

  // makeNewAccount: function() {
  //   $.ajax({
  //     url: "/accounts/create", type: "post", dataType: "script"
  //   })
  // }
}


window.onload = function() {
  Banque.hideBackToMain();
  Banque.buttonFunctions();
}