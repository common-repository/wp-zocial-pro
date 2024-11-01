// closure to avoid namespace collision
(function(){
	// creates the plugin
	tinymce.create('tinymce.plugins.wpzocial', {
		// creates control instances based on the control's id.
		// our button's id is "wpzocial_button"
		createControl : function(id, controlManager) {
			if (id == 'wpzocial_button') {
				// creates the button
				var button = controlManager.createButton('wpzocial_button', {
					title : 'WP Zocial Buttons Shortcode Generator', // title of the button
					image : '../wp-content/plugins/wp-zocial-pro/img/zocial.png',  // path to the button's image
					onclick : function() {
						// triggers the thickbox
						var width = jQuery(window).width(), H = jQuery(window).height(), W = ( 720 < width ) ? 720 : width;
						W = W - 80;
						H = H - 84;
						tb_show( 'WP Zocial Buttons Shortcode Generator', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=wpzocial-form' );
					}
				});
				return button;
			}
			return null;
		}
	});
	
	// registers the plugin. DON'T MISS THIS STEP!!!
	tinymce.PluginManager.add('wpzocial', tinymce.plugins.wpzocial);
	
	// executes this when the DOM is ready
	jQuery(function(){
		// creates a form to be displayed everytime the button is clicked
		// you should achieve this using AJAX instead of direct html code like this
		var form = jQuery('<div id="wpzocial-form"><table id="wpzocial-table" class="form-table">\
			<tr>\
				<th><label for="wpzocial-account">Account Name</label></th>\
				<td><select name="account" id="wpzocial-account">\
				    <option value="">Select Your Account</option>\
					<option value="facebook">Facebook</option>\
                    <option value="googleplus">Google+</option>\
                    <option value="pinterest">Pinterest</option>\
                    <option value="twitter">Twitter</option>\
                    <option value="linkedin">LinkedIn</option>\
                    <option value="wordpress">WordPress</option>\
                    <option value="skype">Skype</option>\
					<option value="google">Google</option>\
	                <option value="youtube">Youtube</option>\
	                <option value="paypal">PayPal</option>\
	                <option value="amazon">Amazon</option>\
                    <option value="eventbrite">Eventbrite</option>\
	                <option value="evernote">Evernote</option>\
	                <option value="foursquare">Foursquare</option>\
	                <option value="yahoo">Yahoo</option>\
	                <option value="vimeo">Vimeo</option>\
	                <option value="scribd">Scribd</option>\
	                <option value="tumblr">Tumblr</option>\
	                <option value="meetup">Meetup</option>\
	                <option value="blogger">Blogger</option>\
                    <option value="stumbleupon">Stumbleupon</option>\
                    <option value="klout">Klout</option>\
	                <option value="digg">Digg</option>\
                    <option value="delicious">Delicious</option>\
	                <option value="instagram">Instagram</option>\
					<option value="acrobat">acrobat</option>\
                    <option value="bitcoin">bitcoin</option>\
                    <option value="cloudapp">cloudapp</option>\
                    <option value="dropbox">dropbox</option>\
                    <option value="email">email</option>\
                    <option value="eventful">eventful</option>\
                    <option value="github">github</option>\
                    <option value="gmail">gmail</option>\
                    <option value="instapaper">instapaper</option>\
                    <option value="itunes">itunes</option>\
                    <option value="ninetyninedesigns">ninetyninedesigns</option>\
                    <option value="openid">openid</option>\
                    <option value="plancast">plancast</option>\
                    <option value="pocket">pocket</option>\
                    <option value="posterous">posterous</option>\
                    <option value="reddit">reddit</option>\
                    <option value="primary">primary</option>\
                    <option value="secondary">secondary</option>\
                    <option value="stackoverflow">stackoverflow</option>\
                    <option value="viadeo">viadeo</option>\
                    <option value="weibo">weibo</option>\
                    <option value="wikipedia">wikipedia</option>\
					<option value="drupal">Drupal</option>\
                    <option value="logmein">Logmein</option>\
	                <option value="guest">Guest</option>\
	                <option value="spotify">Spotify</option>\
	                <option value="lastfm">Lastfm</option>\
	                <option value="songkick">Songkick</option>\
	                <option value="forrst">Forrst</option>\
	                <option value="dribbble">Dribbble</option>\
					<option value="quora">Quora</option>\
	                <option value="pinboard">Pinboard</option>\
	                <option value="lanyrd">Lanyrd</option>\
	                <option value="android">Android</option>\
	                <option value="disqus">Disqus</option>\
	                <option value="chrome">Chrome</option>\
	                <option value="ie">Internet Explora</option>\
	                <option value="html5">html5</option>\
	                <option value="flattr">Flattr</option>\
	                <option value="posterous">Posterous</option>\
                    <option value="gowalla">Gowalla</option>\
	                <option value="yelp">Yelp</option>\
	                <option value="soundcloud">Soundcloud</option>\
	                <option value="smashing">Smashing</option>\
	                <option value="intensedebate">Intensedebate</option>\
	                <option value="eventasaurus">Eventasaurus</option>\
	                <option value="aol">AOL</option>\
	                <option value="appstore">Appstore</option>\
	                <option value="creativecommons">creativecommons</option>\
	                <option value="rss">RSS</option>\
	                <option value="plurk">Plurk </option>\
	                <option value="grooveshark">Grooveshark </option>\
	                <option value="podcast">Podcast</option>\
	                <option value="fivehundredpx">Fivehundredpx</option>\
	                <option value="myspace">Myspace</option>\
	                <option value="windows">Windows</option>\
	                <option value="xing">Xing</option>\
	                <option value="flickr">Flickr</option>\
	                <option value="googleplay">Googleplay</option>\
	                <option value="opentable">Opentable</option>\
	                <option value="angellist">Angellist</option>\
 	                <option value="steam">Steam</option>\
	                <option value="vk">VKontakte</option>\
	                <option value="appnet">Appnet</option>\
	                <option value="dwolla">Dwolla</option>\
	                <option value="statusnet">Statusnet</option>\
	                <option value="bitbucket">Bitbucket</option>\
	                <option value="buffer">Buffer</option>\
	                <option value="lego">Lego</option>\
	                <option value="ycombinator">Ycombinator</option>\
	                <option value="lkdto">Lkd.to</option>\
	                <option value="call">Call a phone</option>\
	                <option value="email">Send a message</option>\
	                <option value="cal">Add to calendar</option>\
	                <option value="print">Print Page</option>\
					<option value="cart">Add to Cart</option>\
					<option value="download-primary">Download Primary</option>\
					<option value="download-secondary">Download Secondary</option>\
				</select><br />\
				<small>Select Button Account Name. i.e. Facebook. If your desired account is not listed simply select any of the above and then replace the generated account to your choice i.e. myaccountname - all small caps.</small></td>\
			</tr>\
			<tr>\
				<th><label for="wpzocial-type">Button Type</label></th>\
				<td><select name="type" id="wpzocial-type">\
				    <option value="">Select Button Type</option>\
					<option value="default">Default Button</option>\
					<option value="icon">Icon</option>\
				</select><br />\
				<small>Select your button type - options available are either Default which is the button with text or Icon which is just the Icon with the account type symbol..</small></td>\
			</tr>\
			<tr>\
				<th><label for="wpzocial-href">Account URL</label></th>\
				<td><input type="text" name="href" id="wpzocial-href" value="" /><br />\
					<small>Enter the URL where you want the Button/Icon to link to.</small></td>\
			</tr>\
			<tr>\
				<th><label for="wpzocial-size">Font Size</label></th>\
				<td><input type="text" name="size" id="wpzocial-size" value="" /><br />\
					<small>Enter a font size for your button i.e 24px or leave blank for default theme font size.</small></td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="wpzocial-submit" class="button-primary" value="Insert WPZocial Shortcode" name="submit" />\
		</p>\
		</div>');
		
		var table = form.find('table');
		form.appendTo('body').hide();
		
		// handles the click event of the submit button
		form.find('#wpzocial-submit').click(function(){
			// defines the options and their default values
			// again, this is not the most elegant way to do this
			// but well, this gets the job done nonetheless
			var options = { 
				'account' : '',
				'type'    : '',
				'size'    : '',
                'href'    : ""			
				};
			var shortcode = '[wpzocial';
			
			for( var index in options) {
				var value = table.find('#wpzocial-' + index).val();
				
				// attaches the attribute to the shortcode only if it's different from the default value
				if ( value !== options[index] )
					shortcode += ' ' + index + '="' + value + '"';
			}
			
			shortcode += ']Your Button Text Here[/wpzocial] ';
			
			// inserts the shortcode into the active editor
			tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
			// closes Thickbox
			tb_remove();
		});
	});
})()