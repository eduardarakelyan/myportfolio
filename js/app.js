const nextBtn = document.querySelector("#btn--next");

document.getElementById('quote').innerHTML =  `"I have been driven many times upon my knees by the overwhelming conviction that I had nowhere else to go. My own wisdom and that of all about me seemed insufficient for that day."`;
document.querySelector('.story__caption').textContent = 'abrahamlincoln';

let quotes = [
    {   
        name: `abrahamlincoln`,
        quote:`"I have been driven many times upon my knees by the overwhelming conviction that I had nowhere else to go. My own wisdom and that of all about me seemed insufficient for that day."`
    },

    {
        name: `stevejobs`,
        quote:`"You can’t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future. You have to trust in something; your gut, destiny, life, karma, whatever."`
    },

    {
        name: `oprahwinfrey`,
        quote:`"Do the one thing you think you cannot do. Fail at it. Try again. Do better the second time. The only people who never tumble are those who never mount the high wire. This is your moment. Own it."`
    }, 

    {

        name: `j.k.rowling`,
        quote:`"Saying it is impossible to live without failing at something is impossible. Unless you live so cautiously that you might as well not have lived at all, in which case you have failed by default."`
    },    

    {
        name: `marktwain`,
        quote:`"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover."`
    },

    {
        name: `michaeljordan`,
        quote:`"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game-winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed."`
    },

    {
        name: `johnf.kennedy`, 
        quote:`"Let us not seek the Republican answer or the Democratic answer, but the right answer. Let us not seek to fix the blame for the past. Let us accept our own responsibility for the future."`
    },

    {
        name: `taylorswift`,
        quote:`"To me, Fearless is not the absence of fear. It’s not being completely unafraid. To me, Fearless is having fears. Fearless is having doubts. Lots of them. To me, Fearless is living in spite of those things that scare you to death."`
    }, 

] 



nextBtn.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * quotes.length);
    document.querySelector('.heading-tertiary').innerHTML = quotes[randomNum].name; 
    document.querySelector('.story__img').src = `img/${quotes[randomNum].name}.jpg`;
    document.querySelector('.story__caption').textContent = quotes[randomNum].name;
    document.querySelector('#quote').innerHTML = quotes[randomNum].quote;
}) 


