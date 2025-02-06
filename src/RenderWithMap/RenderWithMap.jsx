import React from 'react'
import ItemMovie from './ItemMovie';

// Từ 1 mảng dữ liệu render ra danh sách các component (html + css)
export default function RenderWithMap() {
    let listMovie = [
        {
            "maPhim": 1284,
            "tenPhim": "Inside Out",
            "biDanh": "inside-out",
            "trailer": "https://www.youtube.com/embed/seMwpP0yeu4",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/insideout.jpg",
            "moTa": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        },
        {
            "maPhim": 1285,
            "tenPhim": "Home",
            "biDanh": "home",
            "trailer": "https://www.youtube.com/embed/MyqZf8LiWvM",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/home.jpg",
            "moTa": "Oh, an alien on the run from his own people, lands on Earth and makes friends with the adventurous Tip, who is on a quest of her own.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        },
        {
            "maPhim": 1286,
            "tenPhim": "Batman v Superman: Dawn of Justice",
            "biDanh": "batman-v-superman-dawn-of-justice",
            "trailer": "https://www.youtube.com/embed/0WWzgGyAH6Y",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/batmanvssuperman.jpg",
            "moTa": "Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it's ever known before.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        },
        {
            "maPhim": 1287,
            "tenPhim": "Ant-Man",
            "biDanh": "ant-man",
            "trailer": "https://www.youtube.com/embed/1HpZevFifuo",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/antman.jpg",
            "moTa": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        },
        {
            "maPhim": 1288,
            "tenPhim": "Jurassic World",
            "biDanh": "jurassic-world",
            "trailer": "https://www.youtube.com/embed/RFinNxS5KN4",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/jurassicworld.jpg",
            "moTa": "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        },
        {
            "maPhim": 1289,
            "tenPhim": "Fantastic Four",
            "biDanh": "fantastic-four",
            "trailer": "https://www.youtube.com/embed/AAgnQdiZFsQ",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fantasticfour.jpg",
            "moTa": "Four young outsiders teleport to an alternate and dangerous universe which alters their physical form in shocking ways. The four must learn to harness their new abilities and work together to save Earth from a former friend turned enemy.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        },
        {
            "maPhim": 1290,
            "tenPhim": "Mad Max: Fury Road",
            "biDanh": "mad-max-fury-road",
            "trailer": "https://www.youtube.com/embed/hEJnMQG9ev8",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/madmax.jpg",
            "moTa": "In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        },
        {
            "maPhim": 1296,
            "tenPhim": "Avengers: Infinity War ",
            "biDanh": "avengers-infinity-war",
            "trailer": "https://www.youtube.com/embed/DKqu9qc-5f4",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avengers-infinity-war.jpg",
            "moTa": "Biệt đội siêu anh hùng Avengers và những đồng minh sẽ phải sẵn sàng hi sinh tính mạng để chống lại siêu ác nhân hùng mạnh Thanos trước khi hắn phá huỷ mọi thứ và đặt dấu chấm hết cho vũ trụ. ",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        }
    ];

    let renderListMovie = () => {
        // Dùng map để duyệt listMovie và render ra list tên phim
        return listMovie.map(({tenPhim, hinhAnh}, index) => {
            //let {tenPhim, hinhAnh} = item;
            return (
                <ItemMovie key={index} tenPhim={tenPhim} hinhAnh={hinhAnh} />
                // <div key={index}>
                //     <div>
                //         <h3 className='text-center text-2xl font-bold'>{tenPhim}</h3>
                //         <img className='w-30' src={hinhAnh} alt="" />
                //     </div>
                // </div>
            );
        });
    }

    return (
        <div>
            <h2>Render with map</h2>
            <div className='grid grid-cols-6 gap-10'>{renderListMovie()}</div>
        </div>
    )
}
 // Map => duyệt mảng và trả về 1 mảng mới, bắt buộc phải có lệnh return
 let number = [2,3,4];
 let newNumber = number.map((item) => {
     return "Số: " + item;
 });
 // Foreach => 