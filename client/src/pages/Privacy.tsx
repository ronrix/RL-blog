import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Logo from '../components/Logo';

export default function Privacy() {
	return (
		<div>
			<div className="border border-b-gray-900 border-t-0 border-r-0 border-l-0">
				<div className="container mx-auto ">
					<Header />
				</div>
			</div>

			<div className="container mx-auto p-5">
				<h1 className="font-bold">RL Terms of Service</h1>
				<h3 className="text-xl text-gray-800">Effective: March 24, 2022</h3>

				<p className='mt-10'>
					This Privacy Policy explains how A Medium Corporation (
					<span className="italic font-bold font-[labrada]">
						“Medium,” “we,” or “us”
					</span>
					) collects, uses, and discloses information about you. This Privacy
					Policy applies when you use our websites, mobile applications, and
					other online products and services that link to this Privacy Policy
					(collectively, our{' '}
					<span className="italic font-bold font-[labrada]">“Services”</span>),
					contact our customer service team, engage with us on social media, or
					otherwise interact with us.
				</p>

				<p>
					We may change this Privacy Policy from time to time. If we make
					changes, we will notify you by revising the date at the top of this
					policy and, in some cases, we may provide you with additional notice
					(such as adding a statement to our website or providing you with a
					notification). We encourage you to review this Privacy Policy
					regularly to stay informed about our information practices and the
					choices available to you.
				</p>

				<h4 className="font-bold text-2xl">CONTENTS</h4>
        <ul>
          <li>Collection of Information</li>
          <li>Use of Information</li>
          <li>Sharing of Information</li>
          <li>Third-Party Embeds</li>
          <li>Transfer of Information</li>
          <li>Your Choices</li>
          <li>Your California</li>
          <li>Additional Disclosures for Individuals in Europe</li>
          <li>Contact Us</li>
        </ul>

				<h4 className="font-bold text-2xl mt-10">COLLECION OF INFORMATION</h4>

        <h5 className="font-bold text-xl mt-5">Infromation You Provide to Us</h5>
        <p>We collect information you provide directly to us. For example, you share information directly with us when you create an account, fill out a form, submit or post content through our Services, purchase a membership, communicate with us via third-party platforms, request customer support, or otherwise communicate with us. The types of personal information we may collect include your name, display name, username, bio, email address, business information, your content, including your avatar image, photos, posts, responses, and series published by you, and any other information you choose to provide.  </p>
        <p>In some cases, we may also collect information you provide about others, such as when you purchase a Medium membership as a gift for someone. We will use this information to fulfill your request and will not send communications to your contacts unrelated to your request, unless they separately consent to receive communications from us or otherwise engage with us.</p>
        <p>We do not collect payment information through our Services. We rely on third parties to process payments in connection with our Services. Any information you provide to facilitate such a payment is subject to the third-party payment processor’s privacy policy, and we encourage you to review this policy before you provide any information to the payment processor.  </p>

				<h4 className="font-bold text-2xl">USE OF INFORMATION</h4>
        <p>We use the information we collect to provide, maintain, and improve our Services, which includes publishing and distributing user-generated content, personalizing the posts you see and operating our metered paywall. We also use the information we collect to:</p>
        <ul>
          <li>We share personal information with other users of the Services. For example, if you use our Services to publish content, post comments or send private notes, certain information about you will be visible to others, such as your name, photo, bio, other account information you may provide, and information about your activities on our Services (e.g., your followers and who you follow, recent posts, claps, highlights, and responses).</li>
          <li>We share personal information with vendors, service providers, and consultants that need access to personal information in order to perform services for us, such as companies that assist us with web hosting, storage, and other infrastructure, analytics, payment processing, fraud prevention and security, customer service, communications, and marketing.</li>
          <li>We may disclose personal information if we believe that disclosure is in accordance with, or required by, any applicable law or legal process, including lawful requests by public authorities to meet national security or law enforcement requirements. If we are going to disclose your personal information in response to legal process, we will give you notice so you can challenge it (for example by seeking court intervention), unless we are prohibited by law or believe doing so may endanger others or cause illegal conduct. We will object to legal requests for information about users of our Services that we believe are improper.  </li>
          <li>We may share personal information if we believe that your actions are inconsistent with our user agreements or policies, if we believe that you have violated the law, or if we believe it is necessary to protect the rights, property, and safety of Medium, our users, the public, or others.</li>
          <li>We share personal information with our lawyers and other professional advisors where necessary to obtain advice or otherwise protect and manage our business interests.</li>
          <li>We may share personal information in connection with, or during negotiations concerning, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
          <li>Personal information is shared between and among Medium and our current and future parents, affiliates, and subsidiaries and other companies under common control and ownership.</li>
          <li>We share personal information with your consent or at your direction.</li>
          <li>We also share aggregated or de-identified information that cannot reasonably be used to identify you.</li>
        </ul>

				<h4 className="font-bold text-2xl mt-10">THIRD-PARTY EMBEDS </h4>
        <p>Medium does not host some of the content displayed on our Services. Users have the ability to post content that is actually hosted by a third party, but is embedded in our pages (an “Embed”). When you interact with an Embed, it can send information about your interaction to the hosting third party just as if you were visiting the third party’s site directly. For example, when you load a Medium post page with a YouTube video Embed and watch the video, YouTube receives information about your activity, such as your IP address and how much of the video you watch. Medium does not control what information third parties collect through Embeds or what they do with the information. This Privacy Policy does not apply to information collected through Embeds. The privacy policy belonging to the third party hosting the Embed applies to any information the Embed collects, and we recommend you review that policy before interacting with the Embed.</p>

				<h4 className="font-bold text-2xl">TRANSFER OF INFORMATION TO THE UNITED STATES AND OTHER COUNTRIES </h4>
        <p>Medium is headquartered in the United States, and we have operations and service providers in the United States and other countries. Therefore, we and our service providers may transfer your personal information to, or store or access it in, jurisdictions that may not provide levels of data protection that are equivalent to those of your home jurisdiction. For example, we transfer personal data to Amazon Web Services, one of our service providers that processes personal information for us in various data center locations across the globe, including those listed here. We will take steps to ensure that your personal information receives an adequate level of protection in the jurisdictions in which we process it.</p>

				<h4 className="font-bold text-2xl">YOUR CHOICES</h4>
        <h5 className="font-bold text-xl mt-5">Account Information</h5>
        <p>You may access, correct, delete and export your account information at any time by logging into the Services and navigating to the Settings page. Please note that if you choose to delete your account, we may continue to retain certain information about you as required by law or for our legitimate business purposes.</p>

        <h5 className="font-bold text-xl mt-5">Cookies</h5>
        <p>Most web browsers are set to accept cookies by default. If you prefer, you can usually adjust your browser settings to remove or reject browser cookies. Please note that removing or rejecting cookies could affect the availability and functionality of our Services.</p>

        <h5 className="font-bold text-xl mt-5">Communications Preferences</h5>
        <p>You may opt out of receiving certain communications from us, such as digests, newsletters, and activity notifications, by following the instructions in those communications or through your account’s Settings page. If you opt out, we may still send you administrative emails, such as those about your account or our ongoing business relations.</p>

        <h5 className="font-bold text-xl mt-5">Mobile Push Notifications</h5>
        <p>With your consent, we may send push notifications to your mobile device. You can deactivate these messages at any time by changing the notification settings on your mobile device.</p>

				<h4 className="font-bold text-2xl">CONTACT US</h4>
        <p>If you have any questions about this Privacy Policy, please contact us at <span className='font-[labrada] underline'>privacy@medium.com.</span></p>
        <p>If you are from the EEA or the United Kingdom and have questions about this Privacy Policy, please contact us at <span className='font-[labrada] underline'>privacy@medium.com.</span> or our privacy representatives as follows: </p>

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
