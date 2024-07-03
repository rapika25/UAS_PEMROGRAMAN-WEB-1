<script>
document.getElementById('transactionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const hotel = document.getElementById('hotel').value;
    const nights = document.getElementById('nights').value;
    
    let hotelName, pricePerNight;
    
    if (hotel === 'mulia') {
        hotelName = 'Hotel Mulia, Jakarta';
        pricePerNight = 2000000;
    } else if (hotel === 'ayana') {
        hotelName = 'Ayana Resort, Bali';
        pricePerNight = 3500000;
    }
    
    const totalPrice = pricePerNight * nights;
    
    document.getElementById('transactionResult').innerText = `Terima kasih ${name}. Anda telah memesan ${hotelName} untuk ${nights} malam. Total biaya adalah Rp ${totalPrice}.`;
});
</script>