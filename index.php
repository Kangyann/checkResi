<?php
if (isset($_GET['checklimit'])) {
    $limitKey = "https://api.binderbyte.com/v1/checkQuota?api_key=[YOURAPIKEY]";
    $api = json_decode(file_get_contents($limitKey), true);
    $limit = $_GET['checklimit'];
    if ($limit === "developer") {
        foreach ($api as $value) {
            echo '<span>
            Status -> <span class="text-success">' . $value['status'] . '</span>
            Product -> <span class="text-success">' . $value['product'] . '</span>
            Count -> <span class="text-success">' . $value['count'] . '</span>
            Limit -> <span class="text-success">' . $value['limit'] . '</span><br>
            <span class="text-success">Dev -> @kangyann.tx</span>
            </span>';
        }
    } else {
        echo "";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<style>
    @keyframes popUp {
        0% {
            opacity: 0;
        }

        50% {
            opacity: 0.5;
        }

        100% {
            opacity: 1;
        }
    }
</style>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kangyann | Cek Resi</title>
    <link rel="stylesheet" href="assets/style/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="shortcut icon" href="https://svgshare.com/i/jmv.svg" type="image/x-icon" />
</head>

<body>
    <div class="modal" style="background-color:rgb(0,0,0,.8);">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Read For The Information </h1>
                </div>
                <div class="modal-body">
                    <ol>
                        <li>Masih Terdapat Element / Attribute Yang Belum Fungsi, Website Masih Dalam Pengembangan / New Launching</li>
                        <li>API Yang Digunakan Masih Terbatas (Have Limit)</li>
                        <li>Data Yang Diinput Tidak Menyimpang Session (Clear For New Input)</li>
                        <li>Pakailah No Resi & Pilih Kurir Dengan Sesuai</li>
                    </ol>
                    <span>Jika Menemukan BUG / Error Hubungi Kami Di <span class="text-success-emphasis" style="font-weight:bold;">Contact Service !</span></span><br>
                    <span class="text-warning" style="font-weight:bold;">WARNING : </span><span class="text-danger">DILARANG KERAS UNTUK DDOS, SPAM, AND OTHER PENTEST.</span>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" id="close">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div class="navbar sticky-top bg-white">
        <div class="container">
            <div class="d-flex align-items-center">
                <img src="https://svgshare.com/i/jmv.svg" alt="" width="48">
                <span style="white-space:nowrap;">Cek Resi</span>
                <div class="ms-5 d-none d-lg-block">
                    <a class="mx-3 px-3 py-2 rounded-3 text-decoration-none text-dark" href="https://wa.me/6283829055059/?text=">Contact Service</a>
                    <a class="mx-3 px-3 py-2 rounded-3 text-decoration-none text-dark" href="">Service</a>
                    <a class="mx-3 px-3 py-2 rounded-3 text-decoration-none text-dark" href="">Cek Lainnya</a>
                    <a class="mx-3 px-3 py-2 rounded-3 text-decoration-none text-dark" href="">About</a>
                </div>
            </div>
        </div>
    </div>
    <div class="track container d-flex flex-column align-items-center text-center mt-5 p-2">
        <div class="col-lg-6 col-md-8 col-sm-10 col-10">
            <h2>Tracks All Packet Here </h2>
            <span>Belanja Serba Gampang, Cek Resi Hanya Di Kangyann. </span><br>
            <span>Penyedia Berbagai Macam Jenis Paket Bisa Di Cek Di Sini Dengan Mudah Dan Akurat.</span>
        </div>
        <form action="" class="col-lg-6 col-md-8 col-sm-10 col-10 mt-5 text-start" id="form">
            <input class="rounded-3 form-control border-2 bg-body-secondary px-2 py-1 col-12" type="text" id="resiAwb" name="inputResi" value="" style="outline: none;">
            <input class="btn btn-success text-decoration-none mt-2 col-12" type="button" value="Cek Resi" id="cekResi">
            <div id="grup" class="d-none">
                <div class="d-flex flex-wrap justify-content-lg-center gap-2 mt-3">
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-danger" id="courier" name="jne">JNE Express</a>
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-danger" id="courier" name="pos">POS Indonesia</a>
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-danger" id="courier" name="jnt">J&amp;T Express Indonesia</a>
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-primary" id="courier" name="sicepat">SiCepat</a>
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-primary" id="courier" name="tiki">TIKI</a>
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-primary" id="courier" name="anteraja">AnterAja</a>
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-success" id="courier" name="wahana">Wahana</a>
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-success" id="courier" name="ninja">Ninja Express</a>
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-success" id="courier" name="lion">Lion Parcel</a>
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-danger" id="courier" name="pcp">PCP Express</a>
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-danger" id="courier" name="jet">JET Express</a>
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-danger" id="courier" name="rex">REX Express</a>
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-primary" id="courier" name="first">First Logistics</a>
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-primary" id="courier" name="ide">ID Express</a>
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-primary" id="courier" name="spx">Shopee Express</a>
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-success" id="courier" name="kgx">KGXpress</a>
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-success" id="courier" name="sap">SAP Express</a>
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-success" id="courier" name="rpx">RPX</a>
                    <a href="" class="btn text-decoration-none text-white rounded-3 p-2 px-3 btn-primary" id="courier" name="kurir_tokopedia">Kurir Rekomendasi</a>
                </div>
            </div>
        </form>
        <div class="col-lg-6 col-md-8 col-sm-10 col-10 text-start">
            <div class="ressultPackage d-none">
                <div class="text-center mt-2" id="response">
                </div>
                <div class="accordion accordion-flush mt-2" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Lihat Perjalanan Paket Anda
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <table class="table table-bordered" id="trip">
                                    <tr class="table-secondary">
                                        <td>Keterangan</td>
                                        <td>Date</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Detail Paket
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-center">
                                <h2>Kangyann Super Ekpedisi</h2>
                                <p>Customer Service -> <a class="text-decoration-none text-success-emphasis" href="mailto:dev@rizal.my.id">dev@rizal.my.id</a> -> +(62) 838 29 055 059</p>
                                <div class="" id="detailPaket"></div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Share Resi Paket
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <div class="accord-3">
                                    <span>Bagikan No Resi Ini Untuk Memudahkan Pengecekan Antara Pembeli atau
                                        Penjual.</span>
                                    <div class="share position-relative d-flex align-items-center mt-2">
                                        <input class="col-12 px-2 py-1 rounded-3 user-select-none text-black" id="share" type="text" value="https://tools.rizal-pedia.my.id/?noresi=" style=" outline: none !important; border: none; box-shadow: 1px 1px 4px rgb(0,0,0,.5); font-size:.9rem;" disabled>
                                    </div>
                                    <div class="mt-2">
                                        <span>Bagikan Lewat Email -> </span>
                                    </div>
                                    <div class="position-relative overflow-hidden rounded-3 mt-1" style="box-shadow: 1px 1px 4px rgb(0,0,0,.5);">
                                        <input class="col-12 px-2 py-1 text-black" type="email" style=" outline: none !important; border: none; font-size:.9rem; " placeholder="mail:to">
                                        <a class="position-absolute px-3 py-2 text-decoration-none bg-success text-white" href="" style="right: 0; top: -10%;">Send</a>
                                    </div>
                                    <div class="mt-2 d-flex align-items-center gap-2">
                                        <span>Bagikan Untuk Sosial Mediamu Juga -> </span>
                                        <i class="fa-brands fa-instagram fa-xl text-danger" style="cursor: pointer;"></i>
                                        <i class="fa-brands fa-github fa-xl text-dark" style="cursor: pointer;"></i>
                                        <i class="fa-brands fa-linkedin fa-xl text-success" style="cursor: pointer;"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="mt-2" style="font-size: .9rem; cursor: default;">© 2023 Rizal Pedia. <span style="font-weight: bold;">All rights reserved</span></footer>
    </div>
</body>
<script src="assets/js/script.js"></script>

</html>