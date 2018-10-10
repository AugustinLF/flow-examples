enum Color {
    Red(i64),
    RGB { r: i64, g: i64, b: i64 },
}

fn main() {
    let color = Color::Red(1);
}
