<?php
/*
Plugin Name: WP Zocial Buttons Pro
Plugin URI: http://www.wpstrapcode.com/wp-zocial-buttons
Description: Use the Zocial CSS3 Buttons within WordPress. Use the Shortcode Generator to insert the buttons in to posts and pages.
Version: 1.2.4
Author: WP Strap Code
Author URI: http://wpstrapcode.com

Demo: http://www.wpstrapcode.com/wpzocial/
Credits:
        Zocial Butons by Sam Collins (@smcllns)
	    http://zocial.smcllns.com

License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

  Copyright (C) 2013  Zulfikar Nore, WP Strap Code.

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/
require_once('assets/tinymce-plugin.php');

class WPZocialButtons {
    public function __construct() {
        add_action( 'init', array( &$this, 'init' ) );
    }

    public function init() {
        add_action( 'wp_enqueue_scripts', array( $this, 'register_plugin_styles' ) );
        add_shortcode( 'wpzocial', array( $this, 'setup_shortcode' ) );
        add_filter( 'widget_text', 'do_shortcode' );
    }

    public function register_plugin_styles() {
        global $wp_styles;
        wp_enqueue_style( 'zocial-buttons-styles', plugins_url( 'assets/css/zocial.css', __FILE__  ) );
    }

    public function setup_shortcode( $atts, $content = null ) {
        extract( shortcode_atts( array(
			'account'  => '',
            'size'  => '',
			'type'  => '',
			'href'  => "#"
            ), $atts ) );
        $wpzocial = '<a class="zocial '. esc_attr($account) .' '. esc_attr($type) .'" style="font-size: '. esc_attr($size) .';" href="'. esc_attr($href) .'" target="_blank">' . $content . '</a>';

        return $wpzocial;
    }

}

new WPZocialButtons();
