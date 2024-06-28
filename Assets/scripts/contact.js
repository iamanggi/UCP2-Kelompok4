function validateForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var nama = document.getElementById('name').value;
    var noHp = document.getElementById('no_hp').value;
    var alamat = document.getElementById('alamat').value;
    var checkboxes = document.getElementsByName('category');
    var pilihpaket = [];

    // Loop through checkboxes to get selected values
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            pilihpaket.push(checkbox.value);
        }
    });

    // If any of the required fields are empty, show error
    if (nama === '' || noHp === '' || alamat === '' || pilihpaket.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Harap lengkapi semua kolom!',
        });
        return;
    }

    // Show confirmation dialog
    Swal.fire({
        title: 'Konfirmasi Pendaftaran',
        html: `
            <div class="card">
                <div class="card-body text-start">
                    <table>
                        <tr>
                            <td><strong>Nama</strong></td>
                            <td style="padding-left: 10px; padding-bottom: 7px;"><strong>:</strong> ${nama}</td>
                        </tr>
                        <tr>
                            <td><strong>No. Handphone</strong></td>
                            <td style="padding-left: 10px; padding-bottom: 7px;"><strong>:</strong> ${noHp}</td>
                        </tr>
                        <tr>
                            <td><strong>Alamat</strong></td>
                            <td style="padding-left: 10px; padding-bottom: 7px;"><strong>:</strong> ${alamat}</td>
                        </tr>
                        <tr>
                            <td><strong>Pilih Paket</strong></td>
                            <td style="padding-left: 10px; padding-bottom: 7px;"><strong>:</strong> ${pilihpaket}</td>
                        </tr>
                    </table>
                </div>
            </div>
        `,
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Konfirmasi',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            // Jika pengguna mengkonfirmasi, tampilkan pesan sukses
            Swal.fire({
                title: 'Pendaftaran Berhasil!',
                text: 'Data pendaftaran Anda telah berhasil disimpan.',
                icon: 'success'
            }).then(() => {
                // Kirim formulir setelah menampilkan pesan sukses
                document.getElementById('registrationForm').submit();
            });
        } else {
            // Jika pengguna membatalkan, tampilkan pesan kekecewaan
            Swal.fire({
                title: 'Pendaftaran Dibatalkan',
                icon: 'error'
            });
        }
    });
}
