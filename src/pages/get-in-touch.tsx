import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function GetInTouch() {
  return (
    <Layout
      title="Get in Touch"
      description="Contact Vramework for questions, feedback, or collaboration opportunities."
    >
      <main className="flex flex-col items-center py-16 px-4 bg-gray-50">
        <div className="max-w-screen-md mx-auto text-center bg-white shadow p-8 rounded-lg">
          <Heading as="h1" className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </Heading>
          <p className="text-lg text-gray-600 mb-6">
            Have questions, feedback, or want to collaborate? We'd love to hear from you!
          </p>
          <div className="text-lg font-medium text-gray-800">
            <p>Email us directly:</p>
            <a
              href="mailto:yasser.fadl@vlandor.com"
              className="text-blue-600 hover:underline break-all"
            >
              yasser.fadl@vlandor.com
            </a>
          </div>
          <div className="text-lg font-medium text-gray-800 mt-6">
            <p>Or reach out via GitHub:</p>
            <a
              href="https://github.com/vramework/vramework"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/vramework/vramework
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
