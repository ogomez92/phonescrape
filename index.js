const fs = require('fs')
function main() {
let file=fs.readFileSync("your_address_books.json")
let contacts=JSON.parse(file)
let str="First Name,Mobile Phone\n"
let all=contacts["address_book"]["address_book"]
let maxDetails=0;
let currentDetails=0;
for (let i=0;i<all.length;i++) {

	for (let j=0;j<all[i].details.length;j++) {
	if (/^(\+\d+)$/.test(all[i].details[j]["contact_point"])) {
		phone=all[i].details[j]["contact_point"]
			str+=all[i].name+","
		str+=phone+"\n"
		maxDetails++;
		break; //break out of this second loop
		}
	}
}
console.log("I was able to extract "+maxDetails+" phone numbers.")
console.log("writing...")
fs.writeFileSync("phonescrape_contacts.csv",str)
console.log("Success! phonescrape_contacts.csv written. Go import!")
}
main()