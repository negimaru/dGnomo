//sPascualo 
(function($) {
	
    var self = $.sPascualo = new function(){};
	
    $.extend(self, {

    	sPascualoBG : [
    		'https://i.ytimg.com/vi/v9VNWHYLpfo/maxresdefault.jpg'
    	],

        sPascualoIMGs : [
			'http://i.imgur.com/GX9VfaG.png',
			'http://i.imgur.com/S4ng5NR.jpg',
			'http://i.imgur.com/z9IOB9I.png',
			'http://i.imgur.com/bpBliKd.jpg',
			'http://i.imgur.com/mQMWm2u.jpg',
			'http://i.imgur.com/EzZZkjG.jpg',
			'http://i.imgur.com/TTxiDdf.png',
			'http://i.imgur.com/8FfOUHk.jpg',
			'http://i.imgur.com/lhUGJrt.jpg',
			'http://i.imgur.com/aSdhrTv.jpg',
			'http://i.imgur.com/ZBW9j11.jpg',
			'http://i.imgur.com/zlW2B2P.jpg',
			'http://i.imgur.com/Vuuers0.jpg',
			'http://i.imgur.com/nPd9c2U.jpg',
			'http://i.imgur.com/24KQ35u.jpg',
			'http://i.imgur.com/ksuAKpH.jpg',
			'http://i.imgur.com/P4uAA4y.png'
        ],

        handleImages : function (lstImgs, time)
        {
            $.each($('img'), function(i,item) { 
                //Skip if image is already replaced
                if($.inArray($(item).attr('src'), lstImgs) == -1)
                {
					var h = $(item).height();
					var w = $(item).width();
					
					//If image loaded
					if(h > 0 && w > 0)
					{
						//Replace
						$(item).css('width', w + 'px').css('height', h + 'px');
						$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
					}
					else
					{
						//Replace when loaded
						$(item).load(function(){
							//Prevent 'infinite' loop
							if($.inArray($(item).attr('src'), lstImgs) == -1)
							{
								var h = $(item).height();
								var w = $(item).width();
								$(item).css('width', w + 'px').css('height', h + 'px');
								$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
							}
						});
					}
				}
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo : function (bgImgs, time)
        {
			$backgroundImages = $(
            	'[class*=logo], [class*=header], [id*=header], [id*=logo],' +
            	'[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
            	'[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,'+
            	'[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            	)
            	.filter(function() {
            		backgroundImg = $(this).css('background-image');
            		return backgroundImg && backgroundImg != 'none';
            	}
            );

            $backgroundImages.each(function(i, item) {
            	$(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
            	$(item).css('background-position', '0 0');
            	$(item).css('background-repeat', 'no-repeat');
            	$(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function(){
        self.handleImages(self.sPascualoIMGs, 3000);
     	self.handleLogo(self.sPascualoBG, 3000);
		$('body').append( '<audio autoplay preload="auto"><source class="audio-source" src="https://www.tumblr.com/audio_file/negimaruxp/164027834554/tumblr_ouhbde4eLG1t3uk21?plead=please-dont-download-this-or-our-lawyers-wont-let-us-host-audio"></audio>' );
    });
})(jQuery);

/*

'http://i.imgur.com/GX9VfaG.png',
'http://i.imgur.com/S4ng5NR.jpg',
'http://i.imgur.com/z9IOB9I.png',
'http://i.imgur.com/bpBliKd.jpg',
'http://i.imgur.com/mQMWm2u.jpg',
'http://i.imgur.com/EzZZkjG.jpg',
'http://i.imgur.com/TTxiDdf.png',
'http://i.imgur.com/8FfOUHk.jpg',
'http://i.imgur.com/lhUGJrt.jpg',
'http://i.imgur.com/aSdhrTv.jpg',
'http://i.imgur.com/ZBW9j11.jpg',
'http://i.imgur.com/zlW2B2P.jpg',
'http://i.imgur.com/Vuuers0.jpg',
'http://i.imgur.com/nPd9c2U.jpg',
'http://i.imgur.com/24KQ35u.jpg',
'http://i.imgur.com/ksuAKpH.jpg',
'http://i.imgur.com/P4uAA4y.png'


*/

