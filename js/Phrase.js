/*
    Word Guessing Game
    Phrase.js
*/

//Phrase constructor class

class Phrase {
    constructor(phrase) {
    this.phrase = phrase.toLowerCase();
}

//add randomly selected phrase to display

    addPhraseToDisplay() {
        let picIndex = Math.floor(Math.random() * picsArray.length);
        console.log(picIndex)
        let link = picsArray[picIndex];
        document.body.style.backgroundImage = `url(${link})`;
        console.log(link)
        console.log(link)
        console.log(document.querySelector('.main-container'))
//split phrase string into array of characters

        let phraseLetters = this.phrase.split('');
        phraseLetters.forEach(letter => {

//create placeholder for each non-space character

            let placeholder = document.createElement('li');
            if(letter === " "){
                placeholder.className = "space";
            } else {
                placeholder.className = `hide letter ${letter}`;
                placeholder.innerHTML = `${letter}`;
            }
            document.getElementById('phrase').firstElementChild.appendChild(placeholder);
        });

//insert line breaks to prevent words from confusingly overflowing onto a new line

        const spacesArray = document.querySelectorAll('.section > ul > li.space');
        if(spacesArray.length >= 3 && spacesArray.length < 7) {
            document.querySelectorAll('.section > ul > li.space')[2].after(document.createElement('br'));
        } else if(spacesArray.length >= 7) {
            document.querySelectorAll('.section > ul > li.space')[2].after(document.createElement('br'));
            document.querySelectorAll('.section > ul > li.space')[4].after(document.createElement('br'));
            document.querySelectorAll('.section > ul > li.space')[6].after(document.createElement('br'));
        }
    }

//check whether phrase contains the letter selected by the user

    checkLetter(letter) {
        if(this.phrase.includes(letter)) {
            return true;
        }
    }

//reveal correctly selected letter

    showMatchedLetter(letter) {
        let correctLetters = document.querySelectorAll(`.${letter}`);
            for(let i = 0; i < correctLetters.length; i++) {
            correctLetters[i].classList.replace('hide', 'show');
        }
    }
}

//store phrases in an array

const picsArray = [
    "https://lh3.googleusercontent.com/pw/AM-JKLXC8njziwzl86aWCKmBI-5kEV4Do_qSwveKWiqrVvdbxQJ_vQ4gVUcA0ZwdU8v3B-gjfvfDuHcael850AdpN3NJ-ymKmXhajgSGmhnifoP55uYNtcGlGwuY9DEO8roSsY3CkTtDH3ozUhNG2wLTQcxo=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLUQVtIhqEYOhvlhsuGqsAoCxY0mZoF1h-nLRjso5DLDdaHwwIY4ogrZ_kZCYkJKlD51ctA12ydg37ljAuTj-AmLuBf5ofcrkRV6WK3uppzZLQ9dGkggM3nTiUIlx6z7UQE35aELfZttG6SYIPKAj-69=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLVoX43sYScb2aI638lTfk7X6dgT2DSSXDqwuCQHVvRdf_q99TKJ5TXvILoVD2lN6nfpN6UWU7aMA9nSpHftBj16WRvco4uywRIdDotoGzTZ-koKcra2oBMWghk_ECV7t0L7Ho6oGOpuopHkicEu-UMZ=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLVh-bPRWn2rueE62nb8Dik9bogUrct1JnRYWc7U6GhVQFy2A3bFzDx_SvwPx6ZzN_RZ79_IvH4zz-_YfdkXb-JR28dhK2ZrSQHxy6mMIiZo8xb96CZD8pWngawinQfss0x6F_7Qkmm5u1IQb4xE0Dn5=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLWQoHYK2GRI3hCTi_Cv4LboNseBNWiu6-vGp9arpWp66CnuypNnVfx_HX0JWCxqfd75gJcWypxZTuIsMUrf9utOspoYqZst-kgMYg4u_sgevhaIH0K4taZgkS6NIqLgnUHs-UuTIB92O6UHacYhz80G=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLVOJRyIsm_ntyWeEqAekTrcjR19YK20lsDDPO3BEXa6KGQ6mWu2Rj37mpry2oODo01EHRNtOuPLwEahfa1rDQS3U9nWmKq0pR0qyIflAIU7qV4i8QkeUZ1ucv-vsLDCVzuAeKTqwqwhytFdzSpUK00b=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLXSkXmW8GpfVIcFS8U8ugYbJ-7EfCn7-XPkmLopX3kHjGo8xY3iTjeovSkm2SBLbn1YGXLlY3C10Omm1jIDXuZyNb-qXBvtF3Q2J0rmJ9ODDfYwMkIj4F0bUZGo0gUrsDgafBU5gPGEMS24CcS-S6p1=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLU4w9qE2jALlvpNviwH6BJwCWZUdjat90LzTo7PZPuAViqC-Vept0LWzePcvIY_QdwIljmqzZmsBtIWpKBCyDYMQYzJpXk5JkXRZoyv79gtKdInN4F5u2k0EJj-jMfbib8dqWvk5mENuq8EilWqEL3Q=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLX4tKFTteqdiUylR7HN6yn9h6BVOCMaLJK4b0sTyTyRJJlse3KZRgjenCsXG0jxj07Bk4Mu7dE0KCeRLJm4-eP0-lWaWvv5lA-hrpCmTCEcXX0yGwPjmvlbaRf5WqsStgHaMZvDY47DUNVFiNwRcDwY=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLVzGlEhmZ7XUIfznz9BttRZnvhe1Le8LqWSumSko2fne6Q3tGnweRleudoF5fB_xCM7SXnL2wCr_pBjnPkHXCOxAxbGBPtRykewfyEf-dMQKBEkBQQwbKsxjS2ux2IyKNfo2h0XGDE7yz-hPKKiCJV-=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLVCyW-k7Z_lklxj6UrpiGLVSE_naWeGwbeBGWfMHC0XJQYwR80TSquS7t9RPY6WJ_LGtGYKzZMNMNYaB_4ZiyJbjpR4CcA_1CK5Q7V0tRJitIYIuTAQ6q7nXsJiEwV-Lu91HCHftcxUolziGbs8AGRT=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLUaQpX3W9Wib5wPsvYnxv_f_fgdRS9SzjIq9QJf4oNowdMyPI0uys5DcuJmIGSQZPkRWKGFfWE1nE8NT9BpJdgAuaDMxbtlrICbeH1n24Tvu-7gLtVV1eOryI04tvlaawTEUtnYz1DpOCF_toSEPUE8=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLXAZqndX-xPp6MZRzvV0k_kHbqWh2z4CynhGqnMFfn5jqXsi_WkUMqGSoK6VrarYPm3c6v9p6MmPQtUHAxeM5JJWxVa4F6TWH5R3m-XBekHGfwhX6o1EtXeASqVRbfk7cYi9VgoI4eD_jMQNHBj0NiQ=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLVqHirXTplRI4Dd2VoMtdI657ny2cuHiCZlsmenX2u7RgJVnJIn9JGyDwJVtIZg5gBemPiNCtl74ZvgeNPpmyrhVHCTkm7jghZ9PqT9bl3L3ls8HmaXQbKXfL4ifVY2T7kwvtmIyyqtwMRuMvggpRy2=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLU4rNBtNN_shSIkFS26LnTP9Ps0s0ZLnlnFDymLDL4ahEA9toPxmMbk_SUd9EOmyZRm7eCp16TQEwF1K8U0Yw0OzBXSvGBB54OiHQ0cpNyPR0xEnqFroJl33JWqw2Gs5cT4Z44SlU4qLyCZs7RxwlGV=w1206-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLWd5Sy8uxDmJHs8sK1efuOMsC7DXMNg1PoMzFXUwNLI8BS0YpQXGNIoGgl2KR-Ag_tmOKFkUlHo-DqlrEHtuAxuVerhzmUOQKbCbw0Kp_wpuzDesoE2ZXn0j2rwPAGoiZBqC2UqTvNN5GWzZ-fYq2CM=w1206-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLWSzY_2sY8ieDzHiSzgwG-u9a-zNT5sBb2jxX8pP0LLM6i4XvX6uwLukuRCJ0wfup1dNRCWj23UMj9vB4eyiD9bIb9lDs4dM_u-Y62Io6CoPnEC4DSFPq7i43K8Zl_-Ly8lefUWyv769uzQuuEL_RIn=w1206-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLUwwG65mim2v1-6GLL61k0eDhe_nD5-2Mu50JAQC-CGnS9uIakvnjTtMCjUn8jz7rKRYAuBkEMe4FqL_tJmu4OJPJvzoZQx6Y5AysZbZzsVZnhVXdRNaGi50mpSV8kraYkt4UnZSuMIHbKcvbs0nqBM=w676-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLUrvm-qahk549pjDEYqg5ivKMJ1BiyXsZISMUvQw9oPLkQWo4M3G6e4kB8yyaFtioZk59tvY2qVZw3OWKpkXzcbi2yxkO5DCqEFyXbfwHO1tC_XkxO4hfOJ2E09ubdNwLMfod9aKjVXmQQeu3V5TRiz=w1206-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLXPp5HQY-3V413ooTJ2_wLP-9OXWMCVRe-HDUqFscnLeGIwItddfgiT99tdgx9ni6cQbHSTQtNRVGxsxLGLj7vw79Qw9k3YQf3eB-HCDllfqbptqOJ78oBKkNnNVR-kb2tehK4RDEuby_MvH4IpaDcX=w1206-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLXXQcApyM4EpSnGXdIVB2hKUvNulOGRns4IwK8bu2tkbWNv4Vd6zbOlzt90OyI6xXgEVDZCBMUdR75dw1TyipxHZwfS4i-FycRIOiA-EvD_qWqpn2fdcATAtRn0Z2VYUbpWRvQURAYkAyyNWZ2E-Nmz=w1206-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLWUhx4jFK4EO_t3Xo0ruSpkFwjed2Ka3F0fgJirSi7H3GF3gFTQfgS8fLnDQ_g0gR2-Bh8xRM0R_Wgff9wnRIIUyC4jv37q6AsFHHuuYk9T_K8SWMtjUtlw9ZvIpceayDjs2L-OpgY7uDYjv6TincS7=w676-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLWrF4I5g12gtEBJEnIFnaO3nXnbrBwgKwWPNKlYQKlCZm5QD3lvWMvn_LWeTSH60MWB4W99NV_DThfsAI5gXz2I1toS5aErNpOJWM3dZOQX25lDP5LLwqTn805dA6z8lNLygwmSY0GtAe5t_oeDdiJw=w676-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLU357WPhkrVyOSXbhjRoKBHA7gvTBTOjygTx8f89R7wejW_kfTKELq6M6QTZXWW1DqHMMDigkMtcKRAkvX9ZE1hbmUpWAk6D0ExZDW66tncRqw9xiM3RsXGfBO5Hu-IMz2RMuZvquOtngbrtJEXt-qP=w676-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLWe70BLUKMzaLC_s6cyj_3ivmUYLx6jgPveDWjLRrwzqiJVvmIEkcBpnnzyj43D1XNgZItsUQy3fYIBzR6DaVWFFQGm-96XXxyfVrmIfFh8Te58NZh-NfGZgg-JMzaNy4MwOpSaZkaegLqFtC58h4yW=w1202-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLVv9g0-xyys3To7a5haYPrFVIyADChJGSJ6nH5LvWCxkkSuNf3FEUfQd9N4axfb0gG6uQ-dp2bDUZegttr0LAwkJWgPzHN4J4riPkU84aFXb0lQoua_x0W_N1gfFyk67YWYI-RFAK_AYh2aNNtKvQ4M=w1605-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLXkXQgiCiE7d4aRioBxalpGTAxVVJKxIpMkteaGLIvzHZxOs1UmicrbymPaXOyjNE-UyNcU2x24uuuMezAZYxhxoq-cBZc-TPKJjh2vTcCKltrWcj7MH5H2SnL3UWNVI6cFLQvRdkpBvV9wbR4mime2=w508-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLU3kW7cHRY7Pq5m4YX7M7jN75xxs68jkXhHnKYXvvCt6u78AKgLuqaaSkaiSEXLl62ZojbOkIZedG-kLqTTpEq8NuWlLfgqS75HaeXjcVsXsxtkrNZoU558OyXXFVk6LfArL5ZOp4xNVM9xKqvLXTlT=w960-h720-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLVccSbz39ikpC6Y1wvlvoMKuD7hKwS5JekfbFtWS0NT6i0gUkZgBxOh3Ly5koLTN41glWpIwmMAe46j2awKzGzZCIb7u548SW_2nCg8sLHxkpNnSMaRrSgninrQDENawB31KpNW2xjGbByciAEiqsYC=w677-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLXpGulDjgVFAtC6vnO8j-yadVD4q_FlYIK33VuGtPuGHb5utMLNMZe2cT5ZwGVosf39abf3BhPkTXhTVicC4lg5AedjU5qLUAU4f1FkD6G9AojR1DGNaEYO-26Lo1Z1qY4_-xS0id0vFMgDjffxNaA3=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLXuVU32mwKM6ibOL2pkNXj2tEsUv_3s1CSDWZkkPq2xd-9rVKBetiGIoc7S0jvjXBerS3ebZF2_w_YWpiAR6GSEts2eOrRKZrHwI6AjAsPi36qfAF_M8GXzrzuweLqrg5O37Ok8ioMuRPjmiuLSCaxP=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLW7oy1GAQeRWXjZ6kziTEwuYwn3UnMOZ9qjq0ZNAa8RzJLfpYmMorz0GdKNBAY0jq0Iv4wwx-cZK9dFwSY2VUiqNM-BEXY3LMhiV53XspokoHhhsVHGPYY2dSwsZdHCqNqHLUEKETCwpL-eCOi2dzbB=w1605-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLW16Tjl5ty8s258JJZkbWVqTngxRxo_ljcMWImku_X2B9A4THwbUlpH-N0yb9lFRQFusO7aFcIqFLv2mwBCSyUchTxiQYcqGDq8F4Q7Itce8uYniky-r532VKmwgGYmNurMpr43EU34DkYyuCBBvQ7d=w677-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLX8upQ4nXVePVysnDPoRUm6b6VbfZbDs2516rdKd1wwfkGJP7q1-QOZcok2TtKfpF5TYeFs7JukTtqHkJbtuGYWqJORh_DJm-cEjch63_JJ9E-RqNBedRgqPsy0UZGy0m04d5-GZln5CGKHLIwLUGw-=w677-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLXZu7aLIVXyG8BixGUHKDWVx69XybjW8yFS7Hrtyw1bzk0QQwSDiCUrhvkDLXkVJcFENVolhB9O-c6f9MWr5TIegXSS06ZpGSAViw68XopQAZAutxtUWEfzcmDbQHo8O87m1naARst7v-1mQFwF2IgR=w1605-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLW2Rs1N4uk1hjcvwCmVCNTN4DhtbWNtYDjT9gOVrB4ilcg_HR87MFNUPPg2Qo6eusf40n9mpc3O6BuaD6ZIe_FrWPgIRcO10odRizr3JDh1Tp-wmmM0vbtJRcvw_ldmgnUvdIHjVhnCLYuXzlYaiGFY=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLXNp3AYUD9Fg5dB23b2DKdghzzUx52FYAFIvChE1NAW49QtYPOmEG8zE6vF-aPCVGSc4smfId3Yo6SOaFA8pEUv9lmBy125RGyXVCmnoeXfB-QON8aX7R9A2d969nue5XCEIfa3lh9Lf5zF5e7NZ3Cf=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLXru3vUHnEqSpV4GV7AVvWrxtUVlxVbSlPPCznvl2x3S_TpFQBLfbTF8P2rulWbP3GsHfPO2-EihmzvsoMR373R9fQO3zAZ-eAgWmVL4Xq7PhfL0HdGdXNOKj0LMt4I5aQSdhNDFDpFMnTq0pUDh6j8=w677-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLUshceyx58fuiQwqFmHKuw2p8Fbs2U0ZWssR8GVX8j0C2EFMWqYn8qG5R2wCxzhs6trPDITmrbJ04GfTEc0ZdrRY2KOfO_0snZNfQw-8xIPsEz3xuRzxy4yRsOChqeAxp5UjZSATPs4bo5Kd-8qfSKU=w677-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLURl5G5UHqsJsBxxl4_hR4b9iRYIPtrbc4djYtvaUUVRAgmXtjRk0r1wncTOGoOAU9NX35J5PXOQ_GOSQG9stNWkl_aHN1ua0Oi-5xNg7SnkauWO_LdUSQ2Nkd02O6n5ViYMXlKa_sipC_24dG72thk=w870-h405-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLXEYA67g2_TnNd-Mgkyf9hj1IZUOYgA6Yu0-vkRmRr2eUyE-uad3pQSNd5LPyjc8gG2ErmrhbZegjNvw5bdyhVGYO0k4yP3pGy_72vhMbQsrVFgM-5kjweEOyb3jNkdN-yooGZw9_NxYQJbMp_UnHyJ=w508-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLWQQEiFp1qd1BUwOueuuGXYwipeYuFSEASkDBsxuDXC7ux-lfnJuhHx6NHpBNCF4nwhoZUiFNNJTj0MUl8M_Pn0LuWflDg3hD3ZTDRokLVDq9h9CeB45nt2nPflZ4C92OADHa3WFCMztaCmYcczpLFS=w462-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLUV4i52helOHcSVW69OD4W32m_sgjdenqanhWOqymlzgliqr536wy5CKXDpoH1xbDb2Tv-kjAAKFhlV1AZOLyyCzJVEo4xu7DC88qvvl6SliZpjqEYN_hpSOfGL1oRQMgVCYV0yyujp8YmJP73fyvtJ=w1208-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLX-PWP-cXgtqJMQw0gUoxBi9PD9XoS5Pm_hbySk0g8XdJFuyM6ECAWyu2mFnWDeRDiIgDSFnu27KrvQ0_9y5C62yjR19nN2COLNYAvOhA07xejCCvXVDTEPqu3NVvbyrmmJehuYIoA7JVpjoOI4G0xZ=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLXLMioEOXKEGzEQ1g0hZwRV-R_Y7AdXZ_Lvc7XvaeGluTNYBDxIiTMBJ4qdNuOLCc9CDAltw-ezgGR6jNwGUbb0NIjhiQq5Y75vvpJ3deifBiTO3vYZRYQhtw_M08KmpIe--qdlppJkMU1EdnYyMcZ4=w1204-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLXJqVwyFaphu2VauWHDzB00lcvm91_hRTPw_yPYO3eTMG5gCbuPi2Ah3itoM5tbCUneBHbL8Jozf9OFkg1fBonw3T-1XkJdq4y7-ErceNHYbKaxtiDkR-yxGpyTQBR1QiTEmcSWmP0IAm7MQijm8oMx=w1204-h902-no?authuser=0",
]

const phraseArray = [
    "desetka spatiq",
    "eeee ne",
    "ti ne kaza tova toku shto",
    "yeeeeeees",
    "tova beshe tvoqt krai",
    "aide da ne mi kazvash kakvo da pravq",
    "blagodarq shte kaja",
    "tova beshe tvoqt krai",
    "hora ot ei teq punkanki",
    "karta za igrata kras roal",
    "love me love me say that you love me",
    "king daddy",
    "viktooooor",
    "jenskata toaletna",
    "bobiii trqbva da si lqgash",
    "ti imash straaashni ochi",
    "ti si nevuobrazima",
    "mai e ochevidno",
    "imash dobur hod",
    "no az ne ti kazvam kakvo da pravq az ti kazvam bobi",
    "feet pics",
    "pussy tight pussy clean pussy fresh",
    "pussy pics",
    "jerk off folder",
    "tova ne beshe nai mudriqt mi hod",
    "kotarankata",
    "oh baby when you talk like that",
    "baby you light up my world like nobody else",
    "sushtestvenoto e nevidimo za ochite",
    "tova mi zvuchi kato izcqlo tvoi problem",
    "bukvaaaalno",
    "mrusni celuvchici",
    "ti ne si realna ti si imaginerna",
    "suspisiozna baka",
    "hihihiho",
    "lesno mi e",
    "svurshih",
    "mqu",
    "ligavnik",
    "shefche",
    "bravo na detetooo",
    "dvoino stiskane na rukata",
    "mnogo milo",
]


const phraseStrings = [];

for(let i = 0; i < phraseArray.length; i++) {
    phraseStrings.push(window['phrase' + i] = new Phrase(phraseArray[i]));
}