const MyButton = () => {
    function myHandleClick() {
        alert("you clicked me");
    }
    
    return (
        <div>
            <button onClick={myHandleClick}>Click me</button>
        </div>
    );
};

export default MyButton;
