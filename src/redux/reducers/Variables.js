// export const getAllCategories = createAsyncThunk('category/getAllCategories', async (query, {
//     rejectWithValue,
//     dispatch
// }) => {
//     try {
//         const response = await http_no_auth.get("v1/auth/all-categories", {
//             params: query
//         })
//         if (response.data?.data === null) return rejectWithValue(response.data.message)
//         return response.data
//     } catch (error) {
//         const error_status = error.response?.status
//         if (error_status === 404) window.location.replace("/not_found/404")
//         if (error_status === 401) dispatch(auth.handleRefreshLogin({refreshToken: localStorage.getItem(REFRESH_TOKEN)}))
//         return rejectWithValue(error.message)
//     }
// })

import {createSlice} from "@reduxjs/toolkit"
import wedding from "../../assets/png/wedding.png"
import abayas from "../../assets/png/abayas.png"
import beauty from "../../assets/png/beauty.png"
import accessories from "../../assets/png/accessories.png"

import img1 from "../../assets/delete/img.png"
import img2 from "../../assets/delete/img_1.png"
import img3 from "../../assets/delete/img_2.png"
import img4 from "../../assets/delete/img_3.png"
import img5 from "../../assets/delete/img_4.png"

// ========== CATALOG ============

import catalog1 from "../../assets/catalog/img.png"
import catalog2 from "../../assets/catalog/img_1.png"
import catalog3 from "../../assets/catalog/img_2.png"
import catalog4 from "../../assets/catalog/img_3.png"
import catalog5 from "../../assets/catalog/img_4.png"
import catalog6 from "../../assets/catalog/img_5.png"
import catalog7 from "../../assets/catalog/img_6.png"
import catalog8 from "../../assets/catalog/img_7.png"
import catalog9 from "../../assets/catalog/img_8.png"
import catalog10 from "../../assets/catalog/img_9.png"

// ========== VIDEO ============
import video1 from "../../assets/video/video1.mp4"
import video2 from "../../assets/video/video2.mp4"
import video3 from "../../assets/video/video3.mp4"
import video4 from "../../assets/video/video4.mp4"
import video5 from "../../assets/video/video5.mp4"

// ========== VIDEO ============
import photoG1 from "../../assets/photoGallery/img.png"
import photoG2 from "../../assets/photoGallery/img_1.png"
import photoG3 from "../../assets/photoGallery/img_2.png"
import photoG4 from "../../assets/photoGallery/img_3.png"

export const variablesSlice = createSlice({
    name: 'variables',
    initialState: {
        service: [
            {
                id: 1,
                img: wedding,
                title: 'Weddings',
                text: 'свадебные платья'
            },
            {
                id: 2,
                img: abayas,
                title: 'abayas',
                text: 'Абая Бутик'
            },
            {
                id: 3,
                img: beauty,
                title: 'Beauty salon',
                text: 'салон красоты'
            },
            {
                id: 4,
                img: accessories,
                title: 'accessories',
                text: 'Аксессуары'
            }
        ],
        instagram: [
            {
                id: 1,
                img: img1
            },
            {
                id: 2,
                img: img2
            },
            {
                id: 3,
                img: img3
            },
            {
                id: 4,
                img: img4
            },
            {
                id: 5,
                img: img5
            }
        ],
        comments: [
            {
                id: 1,
                name: "Zarina",
                text: "Pelit ex tincidunt est. at hendrerit vehicula, malesuada amet, turpis non, venenatis elit non. sapien ipsum gravida placerat",
                stars: 4
            },
            {
                id: 2,
                name: "Komila",
                text: "Amet, Morbi elit tortor. quam amet, at, tempor amet, id Ut ex viverra amet, odio malesuada massa scelerisque ex sed sed id",
                stars: 4
            },
            {
                id: 3,
                name: "Asal",
                text: "Ut non urna viverra porta Donec tempor vitae tortor. eget sit maximus nec sed elit tincidunt sed dui non massa eget \n",
                stars: 3
            },
            {
                id: 4,
                name: "Muhayyo",
                text: "Nunc viverra amet, orci in eget Cras Nunc faucibus enim. viverra elit volutpat faucibus placerat. massa maximus Ut nibh acelit.",
                stars: 5
            },
            {
                id: 5,
                name: "Nodira",
                text: "Pelit ex tincidunt est. at hendrerit vehicula, malesuada amet, turpis non, venenatis elit non. sapien ipsum gravida placerat",
                stars: 2
            },
            {
                id: 6,
                name: "Zuhra",
                text: "Pelit ex tincidunt est. at hendrerit vehicula, malesuada amet, turpis non, venenatis elit non. sapien ipsum gravida placerat",
                stars: 1
            },
            {
                id: 7,
                name: "Madina",
                text: "Pelit ex tincidunt est. at hendrerit vehicula, malesuada amet, turpis non, venenatis elit non. sapien ipsum gravida placerat",
                stars: 5
            }
        ],
        social: [
            {
                link: "https://www.instagram.com/azadov_azamat",
                name: 'Instagram'
            },
            {
                link: "https://t.me/azamat_azadov",
                name: 'Telegram'
            },
            {
                link: "https://t.me/azamat_azadov",
                name: 'Tik tok'
            }
        ],
        catalog: [
            {id: 1, img: catalog1, type: "NEW"},
            {id: 2, img: catalog2, type: "OLD"},
            {id: 3, img: catalog3, type: "OLD"},
            {id: 4, img: catalog4, type: "HAND"},
            {id: 5, img: catalog5, type: "OLD"},
            {id: 6, img: catalog6, type: "OLD"},
            {id: 7, img: catalog7, type: "NEW"},
            {id: 8, img: catalog8, type: "HAND"},
            {id: 9, img: catalog9, type: "OLD"},
            {id: 10, img: catalog10, type: "OLD"}
        ],
        videos: [
            {id: 1, src: video1},
            {id: 2, src: video2},
            {id: 3, src: video3},
            {id: 4, src: video4},
            {id: 5, src: video5}
        ],
        photosAbaya: [
            {id: 1, img: photoG1},
            {id: 2, img: photoG2},
            {id: 3, img: photoG3},
            {id: 4, img: photoG4}
        ],
        filial: [
            {
                id: 1,
                name: "Салон Чорсу",
                address: "Ташкент, Шайхантахурский район, Чорсу 2",
                orient: "ресторан Мумтоз",
                workTime: "Без выходных 10:00 - 19:00",
                phoneNumber: "+998 97 101 88-80"
            },
            {
                id: 2,
                name: "Салон Беруний",
                address: "Ташкент, Алмазарский район, Фаробий 1",
                orient: "метро Беруний",
                workTime: "Без выходных 10:00 - 19:00",
                phoneNumber: "+998 97 750 88-80"
            }
        ],
        languages: [
            {
                id: 1,
                value: "ru",
                name: 'Рус',
                name2: 'Русский'
            },
            {
                id: 2,
                value: "uz",
                name: 'Узб',
                name2: 'O`zbekcha'
            }
        ],
        activeId: 0,
        loadingPage: false,
        current_page: null, // 0 page
        count_item: null, // 12
        total_elements: null, // 280
        isLoading: false
    },
    reducers: {
        handleRefresh: (state, action) => {
            state.loadingPage = action.payload
        },
        handleSetId: (state, action) => {
            state.activeId = action.payload
        },
        pushComment: (state, action) => {
            state.comments.push(action.payload)
        }
    },
    extraReducers: {}
})

export const {handleRefresh, handleSetId, pushComment} = variablesSlice.actions
export default variablesSlice.reducer