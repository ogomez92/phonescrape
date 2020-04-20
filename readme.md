# what is this?

Phonescrape allows you to extract all your Facebook Messenger phone numbers, in case you want to recover old contacts you deleted and oh, surprise, Facebook still has them.
It should let you then import these into google contacts or Apple ICloud, if you are an IPhone user I recommend putting them into google because Google creates import groups so they won't clutter your contact list if you filter out the group.

## * very important *

There is a flaw in this tool. It will only extract one phone number per contact, because i didn't want to bother with the csv having more possible values for each contact, and because I always add contacts with more than one number under different names. If this is an issue for you, feel free to modify the code and provide a pull request.

# Usage

- Download your facebook Info. as JSON (the second option, make sure it's not HTML).
- Optionally choose low quality media, you won't need any pictures or anything for this.
- Wait for the email saying that it's available and download the zip file.
- Git clone and install nodeJS. You won't need npm as there are no external modules being used.
- Inside the zip folder, go to the folder called about_you then a file called your_address_books.json.
- Copy the file here with the same name,  and run the script.
- It should in theory extract names and phone numbers. For me, it extracted 3828 contacts just fine. Feel free to expand it to get emails as well (should facebook really get emails too? Fishy.
- Today is April 20th 2020. If it breaks in the future, let me know and send me a sample of your JSON file and maybe I'll fix, if I'm not busy. Covid-19 is boring, but this project is not.

Take care everybody.