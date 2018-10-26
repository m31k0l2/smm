import React from "react"
import styles from "./tabPane.module.scss"
export default ({children}) => (
    // <div style={{border: "1px solid"}}>{children}</div>
    <div className={styles.container}>
	    <input id="tab-1" type="radio" name="tab-group" checked="checked" />
	    <label for="tab-1">Tab 1</label>
	    <input id="tab-2" type="radio" name="tab-group" />
	    <label for="tab-2">Tab 2</label>
	    <input id="tab-3" type="radio" name="tab-group" />
	    <label for="tab-3">Tab 3</label>
	    <div className={styles.content}>
	        <div className={styles.content1}>
	            <p class={styles.left}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum sit reprehenderit iusto harum minima. Assumenda, accusamus, perspiciatis inventore tempora qui pariatur quisquam? Deleniti, placeat ea nostrum officiis obcaecati temporibus quod. Ullam, in, adipisci autem at fugit ab tempore enim ratione nesciunt alias corporis vitae quo quod nostrum itaque vero iure?</p>
	            <p class={[styles.left, styles.last].join(" ")}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, id blanditiis deserunt in molestiae excepturi incidunt molestias dolor sunt dolore obcaecati non repellat mollitia error placeat est exercitationem sit voluptates iure autem saepe voluptas harum unde perferendis modi provident labore voluptatum. Repudiandae, aspernatur sit harum quod vero quos sequi voluptas!</p>
	        </div>
	        <div className={styles.content2}>
	            <p class={styles.columnLeft}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, est, nisi enim voluptates dicta quibusdam recusandae eveniet provident non at nostrum nesciunt laudantium omnis aliquam debitis magni expedita cumque tempore.</p>
            	<p class={styles.columnRight}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, molestiae, officia repellendus quasi cumque dolor eius deserunt possimus aliquid neque nam assumenda veniam soluta enim commodi aperiam reprehenderit quia incidunt.</p>
	        </div>
	        <div className={styles.content3}>
	        	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, aperiam, enim odit placeat minus ab vero molestiae ad fugit maiores eaque saepe debitis assumenda ut ipsam eius sit repellendus dolore.</p>
	        	<ul>
	        		<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, in magni illo dolore dicta vero.</li>
	        		<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, minus, aspernatur voluptatem doloribus labore modi.</li>
	        		<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, exercitationem quia id accusamus beatae sunt? Dolorum mollitia sint debitis delectus.</li>
	        	</ul>
	        	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, accusantium, provident ab quo sed blanditiis perspiciatis distinctio aut voluptatibus cum odio quaerat iure vel dolorum fugit explicabo suscipit tenetur. Sed!</p>
	        </div>
	    </div>
	</div>
)