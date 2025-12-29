import React from 'react';

function DataEngineering() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full">
                <span className="text-blue-600 font-semibold text-sm">DATA ENGINEERING</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Manage, process and analyze your data 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> at scale.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform raw data into gold with robust pipelines that power your business intelligence and decision-making.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all">
                Get Started →
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl flex items-center justify-center">
                <div className="text-8xl">💾</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Data Engineering <span className="text-blue-600">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Data Streaming",
                description: "Build high-performance streaming pipelines that process data in real-time with minimal latency.",
                icon: "⚡"
              },
              {
                title: "Data Integration & ETL Services",
                description: "Seamlessly integrate data from multiple sources with robust Extract, Transform, Load processes.",
                icon: "🔄"
              },
              {
                title: "Data Lake Solutions",
                description: "Design and implement scalable data lakes that store structured and unstructured data efficiently.",
                icon: "🏞️"
              },
              {
                title: "Data Governance & Management",
                description: "Establish policies and procedures to ensure data quality, security, and compliance.",
                icon: "🛡️"
              },
              {
                title: "BI & Reporting",
                description: "Create powerful dashboards and reports that turn data into actionable business insights.",
                icon: "📊"
              },
              {
                title: "Data Warehouse Design",
                description: "Build optimized data warehouses that support complex analytical queries at scale.",
                icon: "🏗️"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Technologies We <span className="text-blue-600">Work With</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Apache Spark', 'Apache Kafka', 'Snowflake', 'AWS Redshift', 'Azure Synapse', 'Databricks', 'Apache Airflow', 'dbt', 'PostgreSQL', 'MongoDB', 'Apache Flink', 'Google BigQuery'].map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center font-semibold text-gray-700 hover:shadow-lg transition-all border-2 border-gray-100 hover:border-blue-500">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Data Infrastructure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our data engineering solutions can power your business.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl transition-all">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

export default DataEngineering;