// function: 一个函数可以作为另一个函数的参数
function say(msg) {
    console.log("say:",msg);
}

function execute(func, args) {
    func(args);
}

execute(say, "hello world.");
