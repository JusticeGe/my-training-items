use std::io;
use rand::Rng;

fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1,101);

    println!("Please input your guess:");
    //String::new() utf8编码可增长文本块
    let mut guess = String::new();

    io::stdin().read_line(&mut guess)
        .expect("Failed to read line");

    println!("Your guessed: {}, The secret number is : {}。", guess , secret_number);
}
