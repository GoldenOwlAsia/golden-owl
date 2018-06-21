class ContactsMailer < ApplicationMailer
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contacts_mailer.message.subject
  #
  def contact_form_email(contact)
    @contact = contact
    mail( to: ENV['ADMIN_EMAIL'], subject: 'New message from visitor')
  end
end
