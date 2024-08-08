import Link from 'next/link'

const Blog_Element = () => {
    return (
        <section id='blog_element'>

            <h1 className="heading">Ostatnio na Blogu</h1>

            <div className="blog_element_div">
                <div className="blog_element_1">
                    <div className="post_image_1"></div>
                    <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt quos mollitia alias ipsum quam nemo est quidem veritatis temporibus?</p>
                    <Link href="/randevu_al" className='button'><button className='light'>Czytaj dalej...</button></Link>                
                </div>
                
                <div className="blog_element_2">
                    <div className="post_image_2"></div>
                    <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt quos mollitia alias ipsum quam nemo est quidem veritatis temporibus?</p>
                    <Link href="/randevu_al" className='button'><button className='light'>Czytaj dalej...</button></Link>                
                </div>
                
                <div className="blog_element_3">
                    <div className="post_image_3"></div>
                    <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt quos mollitia alias ipsum quam nemo est quidem veritatis temporibus?</p>
                    <Link href="/randevu_al" className='button'><button className='light'>Czytaj dalej...</button></Link>                
                </div>
            </div>
        </section>
    )
}

export default Blog_Element