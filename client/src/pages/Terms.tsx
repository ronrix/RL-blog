import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Logo from '../components/Logo';

export default function Terms() {
	return (
		<div>
			<div className="border border-b-gray-900 border-t-0 border-r-0 border-l-0">
				<div className="container mx-auto ">
					<Header />
				</div>
			</div>

			<div className="container mx-auto p-5">
				<h1 className="font-bold">RL Terms of Service</h1>
				<h3 className="text-xl text-gray-800">Effective: September 1, 2020</h3>

				<p className="mt-10">
					Thanks for using Medium. Our mission is to deepen people’s
					understanding of the world and spread ideas that matter.
				</p>

				<p>
					These Terms of Service (“
					<span className="italic font-bold font-[labrada]">Terms</span>
					”) apply to your access to and use of the websites, mobile
					applications and other online products and services (collectively, the
					“<span className="italic font-bold font-[labrada]">Services</span>”)
					provided by A Medium Corporation (“Medium” or “we”).{' '}
					<span className="font-bold font-[labrada]">
						By clicking your consent (e.g. “Continue,” “Sign-in,” or “Sign-up,”)
						or by using our Services, you agree to these Terms, including the
						mandatory arbitration provision and class action waiver in the
						Resolving Disputes; Binding Arbitration Section.
					</span>
				</p>

				<p>
					Our <Link to="privacy">Privacy Policy</Link> explains how we collect
					and use your information while our Rules outline your responsibilities
					when using our Services. By using our Services, you’re agreeing to be
					bound by these Terms and our Rules. Please see our{' '}
					<Link to="privacy">Privacy Policy</Link> for information about how we
					collect, use, share and otherwise process information about you.
				</p>

				<p>
					If you have any questions about these Terms or our Services, please
					contact us at{' '}
					<span className="underline font-[labrada]">legal@medium.com.</span>
				</p>

				<h4 className="font-bold text-2xl">
					Your Account and Responsibilities
				</h4>
				<p>
					You’re responsible for your use of the Services and any content you
					provide, including compliance with applicable laws. Content on the
					Services may be protected by others’ intellectual property rights.
					Please don’t copy, upload, download, or share content unless you have
					the right to do so.
				</p>

				<p>Your use of the Services must comply with our Rules.</p>

				<p>
					You may need to register for an account to access some or all of our
					Services. Help us keep your account protected. Safeguard your password
					to the account, and keep your account information current. We
					recommend that you do not share your password with others.{' '}
				</p>

				<p>
					For Personal Information you provide to us (e.g. as a Newsletter
					Editor), you represent and warrant that you have lawfully collected
					the Personal Information and that you or a third party has provided
					all required notices and collected all required consents before
					collecting the Personal Information. You further represent and warrant
					that Medium’s use of such Personal Information in accordance with the
					purposes for which you provided us the Personal Information will not
					violate, misappropriate or infringe any rights of another (including
					intellectual property rights or privacy rights) and will not cause us
					to violate any applicable laws.
				</p>

				<h4 className="font-bold text-2xl">User Content on the Services</h4>
				<p>
					Medium may review your conduct and content for compliance with these
					Terms and our Rules, and reserves the right to remove any violating
					content.
				</p>
				<p>
					Medium reserves the right to delete or disable content alleged to be
					infringing the intellectual property rights of others, and to
					terminate accounts of repeat infringers. We respond to notices of
					alleged copyright infringement if they comply with the law; please
					report such notices using our Copyright Policy.
				</p>

				<h4 className="font-bold text-2xl">Rights and Ownership </h4>
        <p>You retain your rights to any content you submit, post or display on or through the Services.</p>
        <p>Unless otherwise agreed in writing, by submitting, posting, or displaying content on or through the Services, you grant Medium a nonexclusive, royalty-free, worldwide, fully paid, and sublicensable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, publicly perform and display your content and any name, username or likeness provided in connection with your content in all media formats and distribution methods now known or later developed on the Services.</p>
        <p>Medium needs this license because you own your content and Medium therefore can’t display it across its various surfaces (i.e., mobile, web) without your permission.  </p>
        <p>This type of license also is needed to distribute your content across our Services. For example, you post a story on Medium. It is reproduced as versions on both our website and app, and distributed to multiple places within Medium, such as the homepage or reading lists. A modification might be that we show a snippet of your work (and not the full post) in a preview, with attribution to you. A derivative work might be a list of top authors or quotes on Medium that uses portions of your content, again with full attribution. This license applies to our Services only, and does not grant us any permissions outside of our Services.</p>
        <p>So long as you comply with these Terms, Medium gives you a limited, personal, non-exclusive, and non-assignable license to access and use our Services.</p>
        <p>The Services are protected by copyright, trademark, and other US and foreign laws. These Terms don’t grant you any right, title or interest in the Services, other users’ content on the Services, or Medium trademarks, logos or other brand features.</p>
        <p>Separate and apart from the content you submit, post or display on our Services, we welcome feedback, including any comments, ideas and suggestions you have about our Services. We may use this feedback for any purpose, in our sole discretion, without any obligation to you. We may treat feedback as nonconfidential.</p>
        <p>We may stop providing the Services or any of its features within our sole discretion. We also retain the right to create limits on use and storage and may remove or limit content distribution on the Services.  </p>

				<h4 className="font-bold text-2xl">Termination</h4>
        <p>You’re free to stop using our Services at any time. We reserve the right to suspend or terminate your access to the Services with or without notice.</p>

        <h4 className="font-bold text-2xl">Transfer and Processing Data</h4>
        <p>In order for us to provide our Services, you agree that we may process, transfer and store information about you in the US and other countries, where you may not have the same rights and protections as you do under local law.  </p>

        <h4 className="font-bold text-2xl">Amendments </h4>
        <p>We may make changes to these Terms from time to time. If we make changes, we’ll provide you with notice of them by sending an email to the email address associated with your account, offering an in-product notification, or updating the date at the top of these Terms. Unless we say otherwise in our notice, the amended Terms will be effective immediately, and your continued use of our Services after we provide such notice will confirm your acceptance of the changes. If you don’t agree to the amended Terms, you must stop using our Services.</p>

        <h4 className="font-bold text-2xl">Severability</h4>
        <p>If any provision or part of a provision of these Terms is unlawful, void or unenforceable, that provision or part of the provision is deemed severable from these Terms and does not affect the validity and enforceability of any remaining provisions.  </p>

        <h4 className="font-bold text-2xl">Miscellaneous</h4>
        <p>Medium’s failure to exercise or enforce any right or provision of these Terms will not operate as a waiver of such right or provision. These Terms, and the terms and policies listed in the Other Terms and Policies that May Apply to You Section, reflect the entire agreement between the parties relating to the subject matter hereof and supersede all prior agreements, statements and understandings of the parties. The section titles in these Terms are for convenience only and have no legal or contractual effect. Use of the word “including” will be interpreted to mean “including without limitation.” Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and are not intended to confer third-party beneficiary rights upon any other person or entity. You agree that communications and transactions between us may be conducted electronically.  </p>

        {/* footer */}
        <div className='container mx-auto p-5 flex flex-col items-center justify-center'>
          <Logo />
          <div className='mt-5'>
            <Link to="/about" className="text-black font-['Manrope'] mx-5 hover:underline lowercase">About</Link>
            <Link to="/terms" className="text-black font-['Manrope'] mr-5 hover:underline lowercase">Terms</Link>
            <Link to="/privacy" className="text-black font-['Manrope'] hover:underline lowercase">Privacy</Link>
          </div>
        </div>

			</div>
		</div>
	);
}
