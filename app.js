document.querySelector(".button").addEventListener("click", x => {
    console.log('sdaasdsa')
    document.querySelector("img").setAttribute("src", nextPic)
    document.querySelector("h2").innerHTML = getPhrase();
    nextPic = getPic();
})

var nextPic = "https://lh3.googleusercontent.com/pw/AM-JKLXC8njziwzl86aWCKmBI-5kEV4Do_qSwveKWiqrVvdbxQJ_vQ4gVUcA0ZwdU8v3B-gjfvfDuHcael850AdpN3NJ-ymKmXhajgSGmhnifoP55uYNtcGlGwuY9DEO8roSsY3CkTtDH3ozUhNG2wLTQcxo=w1204-h902-no?authuser=0";

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
    "https://lh3.googleusercontent.com/pw/AM-JKLVrGvmIYwMZadm-0bLJka96y5QUSuJGcPwrZblTlGg_q7xtMUvzLqDv-b5tddWJhQfXe0UAAmpR0OKC5a7j_4aSvM9c4Rlsel58cMU4-llO7oEO4shjdnYdx2CVWBxd80MjAG_3KK6qr8PJMv-PW7oE=w870-h405-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLVMXGD2wz44O3PHfLZFb-Pqmw006xbfV-CfJg4GjyWAI6gSM-v8MCSTbX_rSCQcW-tSB-P60DjSiAGmBuOBCR8KKl5-MKFNk8ToBanJOg22SerDHhLOjO1gCTz_PY_Lm11NiXqqWE_tCSMWhqRuPE57=w1605-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLXPaXGjaFGbSsc18V7OYEHnmQJBl0_D5bkPclz_Gmic8NK09ymYLkLkrB-DEKpJtlRbKsnI0Fx3byoLZDsVirq_BvE2LFQMz_0EAkm0gD1B9h3tXmKxwmXnM3Zgj-YjMw8b9WBrddVveSUE6N2np48I=w677-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLWc_66cyM-jpD0ddSPIRk63L-fPB9dofy90u3bwC-1ldTHctbB_RlM3xCbC3tmn-2RbjlKwu7zkXPsXi2IjNLvxT2TaHjdS0BEw-t65P3zu6chZmpg8ng6l5gKLmHkMMQxqcGFwe1c5JrbCGLrVfNp0=w1206-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLWopDfh4z0i9k_LUCg_8XPDjK-twM52VxU7xGqBD-pmbWGse4YsugXqeIDY5Z1rcNk7BysHnDtkgfNx85GyK06IAsDzVsyihSZuZcA-V21He3kO-As84KH3bx9c2npm604rKNOTCNe9UvZInlWPX7lJ=w1206-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLVqYN2CWCKY4vCANc4Gmov08cOPpqDaeLqUPaOoCgwxO_l_ec3qUNBDTA85L4YV5KJjvC3R9xpMl_r4hvEMmc7QFWLFE2hvyK8dCMhbfJxNVl9Q-5zWxdGeqZ0qSCurMpbKWLpcxQoiA7gbx1vKIiYE=w1206-h902-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AM-JKLWJeVLc7QoQx40Z2dY8HNnzbQZ5mgFZFuw_6-nA091a6YmclEiT5rM8wU1P6aHVKRcla3jNbLrb0DeQZuubDk1LdB0KGCyQYFL8eZWWPBEzxuo8yr88aUJmK6npCGRdc9zlJGa-SptxtCJOXP3FCEtY=w1206-h902-no?authuser=0",
]

var index = 0;

const phraseArray = [
    "ima neveroqtno chustvo za humor (az kogato golqmoto zabavno)",
    "ima rai v ochite si zeleni kato americanski pari",
    "e samo moq!!!",
    "si govorim za porno",
    "mi gotvi sladkishi chasove nared",
    "shte mi pravi nai-dobrite svirki",
    "e silna i nezavisima jena(i chovek syshto)",
    "az kogato s maika ti kogato snoshti kogato dvamata kogato",
    "e super umna(goddemit samo gubq sporove)",
    "moga da sporq s neq dali 1 e cherveno ili sinio(ochevidno e cherveno)",
    "vinagi mi spodelq ako neshto ne e nared",
    "mi pishe 'mqu'",
    "ima 44 snimki v JOF",
    "vinagi se starae da izglejda dobre(i vinagi e neveroqtna)",
    "drugite momicheta nqmat bluza na qgodi",
    "kogato pod dusha kogato dvamata zaedno pod dusha kogato",
    "ima strashni ochi (nai-strashnite)",
    "mi obqsni razlikata mejdu transcendentalno i trasncendentno",
    "mi proshtava kato govorq gluposti",
    "gotvi strahotno",
    "mi dava da pipkam kydedo pojelaq",
    "ima strashna grydna obikolka (hihihiho)",
    "se smee na typite mi shegi koito ne spiram da povtarqm",
    "vinagi pravi neveroqtni podaryci",
    "vinagi mi dava dyvka za da ne mirisha na kiseli krastavichki",
    "bedrata i sa topli",
    "govorim v discord 6 chasa",
    "ne se syrdi che q biq na shah",
    "e golqmo slarurche i mnogo si q obicham",
    "vinagi nastoqva da plashta",
    "vinagi e v nastroenie za natiskane (v chasa na vladeva nai-veche)",
    "mi dava da i pravq smuchki i se gordee s tqh",
    "ima nai qkiqt zadnik",
    "ne sym bil po-shtastliv nikoga",
    "sprqh da igraq liga",
    "me motivira super mnogo",
    "vinagi moga da pusna 20 min taimer i da q vidq",
    "djobnite gadjeta sa nai-dobrite gadjeta",
    "mi prashta kamioni pulni s lyubov",
    "mi kaza che dumata bydeshte e bydeshte zashtoto shte byde (wtf)",
    "mi e drago s neq 8==========D",
    "preksuvasht'MUUUUUUUUUUUUUUUUUUUUU'ata krava koi",
    "mi dava da styrja peti vyrhu pizzata",
    "svurzva vsichko s 1984",
"mi pee subemelaradio",
"ima nai-mekite ustni ",
"ne se sydri che se origvam dokato se natiskame",
"ima nevidima taliq(ne q vijdam)",
"mi vodi bezplatni lekcii za time management",
]

function getPic() {
    let picIndex = Math.floor(Math.random() * picsArray.length);
    let link = picsArray[picIndex];
    return link;
}

function getPhrase() {
    if(index == phraseArray.length) index = 0;
    let phrase = phraseArray[index];
    index++;
    return phrase;
}
