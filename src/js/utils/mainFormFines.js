export const mainFormFines = () => {
    
    // const fineForStopping = document.querySelector(".block-forms__btn-fines");
    // const fineForParking = document.querySelector(".block-forms__btn-parking");
    try {
        var fineForStopping = document.querySelector(".block-forms__fines-logo");
        var fineForParking = document.querySelector(".block-forms__parking-logo");

        var blockInfFormFineForStopping = document.querySelector(".block-forms__fines-enter-data");
        var blockInfFormFineForParking = document.querySelector(".block-forms__parking-enter-data");

        fineForStopping.addEventListener('click', () => {
            blockInfFormFineForStopping.classList.toggle("view");
            blockInfFormFineForParking.classList.remove("view");
        });

        fineForParking.addEventListener('click', () => {
            blockInfFormFineForParking.classList.toggle("view");
            blockInfFormFineForStopping.classList.remove("view");
        })
    }
    catch {

    }

}