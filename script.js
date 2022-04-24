function makeTimeblocks(hour, existingTodo = ""){
    var currentHour = new Date().getHours();
    var presentPastOrFuture = "future";
    if(currentHour > hour) presentPastOrFuture = "past";
    if(currentHour === hour) presentPastOrFuture = "present";
    $(".container").append($(`
    <div class="row time-block">
        <div class="hour col-1">${hour}:00</div>
        <textarea name="" id="" cols="30" rows="3" class="description col-9 ${presentPastOrFuture}">${existingTodo}</textarea>
        <div class="btn saveBtn col-2">Save</div>
    </div>`));
}

for(var i = 9; i<18; i++){
    makeTimeblocks(i);
}