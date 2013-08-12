var Banque = {
  removeAccounts: function() {
    $('#accounts-field').remove();
  },

  newAccount: function(){
    $('#new-account').click(function(){
      Banque.removeAccounts();
      Banque.newAccountForm();
      // append new account form to index page
    });
  },

  makeDeposit: function(){
    $('#deposit').click(function(){
      Banque.removeAccounts();
      // append deposit form to index page
    });
  },

  makeWithdrawal: function(){
    $('#withdraw').click(function(){
      Banque.removeAccounts();
      // append withdrawal/transfer form to index page
    });
  },

  buttonFunctions: function(){
    Banque.newAccount();
    Banque.makeDeposit();
    Banque.makeWithdrawal();
  },

  newAccountForm: function() {
    $.ajax({
      url: "/accounts/new", type: "get", dataType: "script"
    })
    // var form = $("<form></form>");
    // form.append("<input type=text value=name />");
    // form.append("<input type=button>");
    // $('#activity-container').append(form);
  }
}


window.onload = function(){
  Banque.buttonFunctions();
}