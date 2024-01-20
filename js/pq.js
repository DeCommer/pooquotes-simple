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
"📏 The longest poo to close out January.",
"🤡 This poo is 'uge'",
"🦪 Gooey",
"🔧 This one has length and girth, but fell apart",
"🥨 Pretzel poo",
"🔺 This one seems to have three ends... strange",
"🐌 The lump",
"🧬 This poo has a helix-like twist",
"Forgot to take the poo picture. 🙄",
"🐖 Pile with a pig tail poo",
"🫧 Somewhere between solid and soft",
"🏔️ This poo piled out",
"🚰 Poof. Liquid poo!",
"🐍 Snake-like goo poo.",
"🪠 Super long! And super straight!",
"🧺 This poo started small, but grew up fast",
"📀 Compact pile","A very brown poo!",
"🪄 Long, but not too long",
"👧 This one's got the curl!",
"🫣 Giant coil.",
"🐍 Snake poo",
"🎢 This poo has it all! Twists, turns, solid, goo",
"🫃 Bulbous",
"🌫️ Perfect coiled, but blurry picture",
"🎼 Your Sharona? My intestines.",
"🏋️‍♂️ Long and strong",
"🧻 TOILET PAPER NOOOOOO!",
"🚰 Never mind the drip.",
"🐣 Too much peeps, not enough poops",
"✊ Fist in the air!",
"💥 This is a dis-ass-ter. Nice poo though",
"🪙 Heads or tails?",
"👧 Tall and blonde poo",
"🌀 Poo Spiral.",
"🧻 This one would be epic without the T.P.",
]


pooBtn.addEventListener("click", () => {
    let rand_quote = quotes[(Math.floor(Math.random() * quotes.length))];
    display.innerText = rand_quote;
})
