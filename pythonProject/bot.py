import telebot

TOKEN = '5531685080:AAEgcWiHxoaC8CyQKrC2O8SQsHDYPCrgkAM'
bot = telebot.TeleBot(TOKEN)

@bot.message_handler(func=lambda message: True)
def save_messages(message):
    username = message.from_user.username
    if username is None:
        username = message.from_user.first_name
    with open('messages.txt', 'a') as file:
        file.write(f'{username}: {message.text}\n')

bot.polling()