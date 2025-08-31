import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <header id="header" className="header navbar-fixed-top">
                <div className="container">
                    <div className="row">
                        <div className="navbar-header">
                            <div className="logo">
                                <Link href="/">
                                    <Image src="/images/mjd-logo.png" width={100} height={50} alt="Name" priority  />
                                </Link>
                            </div>
                        </div>

                        <div className="site-nav-inner">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <nav className="collapse navbar-collapse navbar-responsive-collapse pull-right">

                                <ul className="nav navbar-nav">
                                    <li className="active"><Link href="/">Home</Link></li>
                                    <li><Link href="about.html">About Us</Link></li>

                                    <li className="dropdown">
                                        <Link href="#" className="dropdown-toggle" data-toggle="dropdown">All Events<i className="fa fa-angle-down ml-5"></i></Link>
                                        <ul className="dropdown-menu menu-center" role="menu">
                                            <li><Link href="event.html">Upcoming Events</Link></li>
                                            <li><Link href="event.html">Past Events</Link></li>
                                        </ul>
                                    </li>

                                    <li><Link href="">Blog</Link></li>

                                    <li><Link href="gallery.html">Gallery</Link></li>

                                    <li className="dropdown">
                                        <Link href="#" className="dropdown-toggle" data-toggle="dropdown">Contact<i className="fa fa-angle-down ml-5"></i></Link>
                                        <ul className="dropdown-menu menu-center" role="menu">
                                            <li><Link href="faq.html">FAQ</Link></li>
                                            <li><Link href="career.html">Career</Link></li>
                                        </ul>
                                    </li>


                                    <li className="header-ticket">
                                        <Link className="ticket-btn btn" href="tickets.html">Stay Updated For 2020 Events
                                            <span className="tg-badge">Book Ticket</span>
                                        </Link>
                                    </li>

                                </ul>

                            </nav>

                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;