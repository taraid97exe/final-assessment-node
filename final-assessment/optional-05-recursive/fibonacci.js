function fibonacci(n) {
    if(n === 0) {
        return [0];
    }
    if(n === 1) {
        return [0,1];
    }
    const sebelumFibonacci = fibonacci(n - 1);
    const setelahFibonacci = sebelumFibonacci[sebelumFibonacci.length - 1] + sebelumFibonacci[sebelumFibonacci.length - 2];
    return [...sebelumFibonacci, setelahFibonacci];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
