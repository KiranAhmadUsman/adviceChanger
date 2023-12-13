const qouteNumber = document.getElementById('number');
const quoteText = document.getElementById('quote');
const button = document.getElementById('button');
const qouteArray = ["Embrace the unknown, for it holds the keys to new possibilities.", "In the dance of life, every misstep is a chance to learn a new move.", "Let your heart be a compass, guiding you through the storms of uncertainty.", "The canvas of life is painted with the brushstrokes of resilience.", "Stars can't shine without darkness; let your light break through.", "In the symphony of existence, your unique melody is waiting to be played.", "Wisdom whispers in the silence between thoughts; listen closely.", "Storms may rage, but within you, there is an unshakable calm.", "The road less traveled often leads to the most breathtaking destinations.", "Plant seeds of kindness; you never know what beautiful gardens may grow."];
quoteText.innerText = `"${qouteArray[0]}"`;

let adviceCount = 1;
button.addEventListener('click', function () {
    adviceCount += 1;
    if (adviceCount <= qouteArray.length) {
        if (adviceCount < 10) {
            qouteNumber.innerText = `0${adviceCount}`;
            quoteText.innerText = `"${qouteArray[adviceCount - 1]}"`;
        } else {
            qouteNumber.innerText = adviceCount;
            quoteText.innerText=`"${qouteArray[adviceCount-1]}"`;


        }
    }
})

