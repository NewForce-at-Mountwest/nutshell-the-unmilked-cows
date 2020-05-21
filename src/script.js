

//this is me posting to the DOM.... yay
fetch("http://localhost:8088/events")
    .then(nutshell => nutshell.json())
    .then(parsedEvents => {
        parsedEvents.forEach((eventsObject) => {
            document.querySelector("#eventContainer").innerHTML += `
    <h3>${eventsObject.name}</h3>
    <p>Date:${eventsObject.date}</p>
    <p>Location:${eventsObject.location}</p>`
        })

        //lets make the save button work
        document.querySelector("#newEventButton").addEventListener("click", function () {
            console.log("clicked")
            return document.querySelector("#eventFieldset").innerHTML += `
       <fieldset>
       <input id="newEventName" placeholder="Event Name">
       <input id="newEventDate" placeholder="Event Date">
       <input id="newEventLocation" placeholder="Event Location">
       </fieldset>
       <div>
           <button id ="eventSave">save</button>
       </div>`
        })

    });


const buildEventsObjectFromForm = () => {
    return {
        name: document.querySelector("#newEventName").value,
        date: document.querySelector("#newEventDate")
            .value,
        location: document.querySelector("#newEventLocation").value,

    };
}


document.querySelector("body").addEventListener("click",function() {
    if(event.target.id === "eventSave"){
        console.log(buildEventsObjectFromForm())
        
    }
    
})

