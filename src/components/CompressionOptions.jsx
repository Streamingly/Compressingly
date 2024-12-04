const CompressionOptions = ({ compressionLevel, setCompressionLevel }) => (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Compression Options</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-4">
            {[
              { value: 'balanced', label: 'Balanced', description: 'Recommended for most videos' },
              { value: 'high', label: 'High Compression', description: 'Maximum file size reduction' },
              { value: 'low', label: 'Low Compression', description: 'Minimal quality loss' }
            ].map(option => (
              <div key={option.value} className="flex items-center justify-between">
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="compression" 
                    value={option.value}
                    checked={compressionLevel === option.value}
                    onChange={() => setCompressionLevel(option.value)}
                    className="mr-3"
                  />
                  <span className="font-medium">{option.label}</span>
                </label>
                <span className="text-gray-600">{option.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  export default CompressionOptions;