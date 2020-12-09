var slider = new Vue(
  {
    el : '#root',
    data : {
      counter : 0,
      img : [
        'https://www.greenme.it/wp-content/uploads/2020/09/shutterstock_715342429.jpg',
        'https://magicblitzen.com/wp-content/uploads/2018/01/lupo-nero.png',
        'https://i.pinimg.com/474x/2f/70/9b/2f709b47cb45786188374be2915eaf74.jpg',
        'https://t1.ea.ltmcdn.com/it/images/1/8/6/dingo_canis_lupus_dingo_2681_12_600.jpg',
        'https://t2.ea.ltmcdn.com/it/images/1/8/6/lupo_dello_yukon_canis_lupus_pambasileus_2681_11_600.jpg',
      ]
    },
    methods: {
      nextImg : function () {
        this.counter++
        if (this.counter == this.img.length){
          this.counter = 0
        }
      },
        preImg : function () {

          }
      }
  }
);
