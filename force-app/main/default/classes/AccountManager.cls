public with sharing class AccountManager {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccounts() {
    return [SELECT id, name, phone FROM account LIMIT 10];
  }
}
