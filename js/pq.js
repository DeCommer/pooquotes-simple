const pooBtn = document.querySelector("#pooBtn")
const display = document.querySelector("#quote")





let quotes = [
"🎉 This is the first poo of the New Year!",
"🥈 The number two poo",
"😴 My bowels rested on the 3rd day of the year, but not the 4th!",
"🥨 I call this one 'The Knot'",
"🤢 Disregard the hair. GROSS!",
"🦑 The Murky deep.",
"🧩 This poo broke up on contact.",
"🥫 I don't know why this one is so red. Ketchup perhaps?",
"🦠 First of the many 'goo' poos",
"💥 Explosion!",
"🌽 Hey corn!! It IS real!",
"👽 This turd is looking a little grey",
"🪢 I like the ropiness of this one.",
"👝 Small and not too spectacular.",
"🟤 It's a poo!",
"🖲️ Lumpy in the front",
"🦑 Pardon the dark appearance of this sea monster",
"🏔 This one is a pretty big mound",
"🧻 I was too concerned with wiping my butt to make a quote I guess",
"🏄🏾 Sooper loong!",
"🐍 Nice coil to this one",
"🦭 This girth is something to behold!",
"📏 The longest poo to close out January."
]


pooBtn.addEventListener("click", () => {
    let rand_quote = quotes[(Math.floor(Math.random() * quotes.length))];
    display.innerText = rand_quote;
    console.log(rand_quote);
})
