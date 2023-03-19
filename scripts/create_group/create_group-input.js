const group_input = document.getElementById("group_input");
const group_input_btn = document.getElementById("group_input-btn");

group_input.style.display = "none";

//This listener listen input, and in input code change the width. So I think it must it
group_input.addEventListener("input", () => {

    let group_input_new_length = 0;

    let width = 30;

    console.log(group_input.length)

    if(group_input.length > 3){
        if(group_input_new_length > group_input.length){
            group_input.style.width += `${width + 7}px`;
        } else {
            group_input.style.width -= `${width + 7}px`;
        }

        group_input_new_length = group_input.length;
    }

})


//Group input btn, it is button for open the input

group_input_btn.addEventListener("click", () => {
    group_input.style.display = "inline-flex";
    group_input_btn.style.display = "none";
})

