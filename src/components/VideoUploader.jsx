import React, { useState, useCallback } from 'react';
import { Upload, Settings, Film, ChevronDown, ChevronUp } from 'lucide-react';

const CompressionOptions = ({ isVisible, videoInfo }) => {
  const [preset, setPreset] = useState('medium');
  const [quality, setQuality] = useState('high');
  const [resolution, setResolution] = useState('original');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const AdvancedOptions = ({ isVisible }) => {
    const [bitrate, setBitrate] = useState('auto');
    const [keyframeInterval, setKeyframeInterval] = useState(250);
    const [audioQuality, setAudioQuality] = useState('high');
    const [threadCount, setThreadCount] = useState('auto');
  
    if (!isVisible) return null;
  
    return (
      <div className="space-y-6 mt-6 p-4 bg-gray-50 rounded-lg">
        {/* Rate Control Method */}
        <div>
          <label className="block text-sm font-medium mb-2">Rate Control Method</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md bg-white"
          >
            <option value="crf">CRF (Constant Rate Factor)</option>
            <option value="cbr">CBR (Constant Bitrate)</option>
            <option value="vbr">VBR (Variable Bitrate)</option>
            <option value="qp">QP (Constant Quantization)</option>
          </select>
          <p className="mt-1 text-sm text-gray-500">
            Determines how video quality and file size are balanced
          </p>
        </div>
  
        {/* Bitrate Settings */}
        <div>
          <label className="block text-sm font-medium mb-2">Target Bitrate</label>
          <select
            value={bitrate}
            onChange={(e) => setBitrate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-white"
          >
            <option value="auto">Auto (Recommended)</option>
            <option value="1000">1 Mbps - Low Quality</option>
            <option value="2500">2.5 Mbps - Standard Quality</option>
            <option value="5000">5 Mbps - High Quality</option>
            <option value="8000">8 Mbps - Very High Quality</option>
            <option value="custom">Custom Bitrate</option>
          </select>
        </div>
  
        {/* Encoding Profile */}
        <div>
          <label className="block text-sm font-medium mb-2">HEVC Profile</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md bg-white"
          >
            <option value="main">Main Profile</option>
            <option value="main10">Main 10 (10-bit)</option>
            <option value="mainstillpicture">Main Still Picture</option>
          </select>
          <p className="mt-1 text-sm text-gray-500">
            Main 10 supports 10-bit color depth for better quality
          </p>
        </div>
  
        {/* Keyframe Settings */}
        <div>
          <label className="block text-sm font-medium mb-2">Keyframe Interval</label>
          <select
            value={keyframeInterval}
            onChange={(e) => setKeyframeInterval(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-white"
          >
            <option value="250">250 frames (Default)</option>
            <option value="50">50 frames (More frequent)</option>
            <option value="500">500 frames (Less frequent)</option>
            <option value="custom">Custom Interval</option>
          </select>
          <p className="mt-1 text-sm text-gray-500">
            Lower values = better seeking, larger file size
          </p>
        </div>
  
        {/* Audio Settings */}
        <div>
          <label className="block text-sm font-medium mb-2">Audio Settings</label>
          <select
            value={audioQuality}
            onChange={(e) => setAudioQuality(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-white"
          >
            <option value="high">High Quality (256 kbps)</option>
            <option value="medium">Medium Quality (128 kbps)</option>
            <option value="low">Low Quality (96 kbps)</option>
            <option value="original">Keep Original</option>
          </select>
        </div>
  
        {/* Performance Settings */}
        <div>
          <label className="block text-sm font-medium mb-2">Threading</label>
          <select
            value={threadCount}
            onChange={(e) => setThreadCount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-white"
          >
            <option value="auto">Auto-detect (Recommended)</option>
            <option value="1">Single Thread</option>
            <option value="2">2 Threads</option>
            <option value="4">4 Threads</option>
            <option value="8">8 Threads</option>
          </select>
        </div>
  
        {/* Additional Encoding Options */}
        <div>
          <label className="block text-sm font-medium mb-2">Additional Options</label>
          <div className="space-y-3">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Fast Decode (for mobile devices)</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Scene Cut Detection</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Preserve Film Grain</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Enable HDR (if source is HDR)</span>
            </label>
          </div>
        </div>
  
        {/* Expert Mode */}
        <div>
          <label className="block text-sm font-medium mb-2">Expert Mode</label>
          <textarea
            placeholder="Additional FFmpeg parameters..."
            className="w-full p-2 border border-gray-300 rounded-md bg-white h-20 font-mono text-sm"
          />
          <p className="mt-1 text-sm text-gray-500">
            For advanced users: Add custom FFmpeg parameters
          </p>
        </div>
      </div>
    );
  };

  const AdvancedSettingsToggle = ({ isOpen, onToggle }) => (
    <button 
      onClick={onToggle}
      className="flex items-center text-blue-600 hover:text-blue-700"
    >
      {isOpen ? (
        <>
          <ChevronUp className="w-4 h-4 mr-1" />
          Hide Advanced Options
        </>
      ) : (
        <>
          <ChevronDown className="w-4 h-4 mr-1" />
          Show Advanced Options
        </>
      )}
    </button>
  );

  if (!isVisible) return null;

  return (
    <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Settings className="w-5 h-5 mr-2" />
        Compression Settings
      </h3>

      {videoInfo && (
        <div className="mb-6 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2 flex items-center">
            <Film className="w-4 h-4 mr-2" />
            Video Information
          </h4>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <p>Size: {(videoInfo.size / (1024 * 1024)).toFixed(2)} MB</p>
              <p>Type: {videoInfo.type}</p>
            </div>
            <div>
              <p>Name: {videoInfo.name}</p>
              <p>Duration: Analyzing...</p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {/* Compression Preset */}
        <div>
          <label className="block text-sm font-medium mb-2">Compression Preset</label>
          <select
            value={preset}
            onChange={(e) => setPreset(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-white"
          >
            <option value="ultrafast">Ultrafast - Fastest, larger file size</option>
            <option value="superfast">Superfast - Very fast, larger file size</option>
            <option value="veryfast">Very Fast - Fast, moderate file size</option>
            <option value="faster">Faster - Good balance for speed</option>
            <option value="fast">Fast - Better compression</option>
            <option value="medium">Medium - Default, good balance</option>
            <option value="slow">Slow - Better quality, smaller size</option>
            <option value="slower">Slower - High quality, smaller size</option>
            <option value="veryslow">Very Slow - Best quality, smallest size</option>
          </select>
          <p className="mt-1 text-sm text-gray-500">
            Affects compression speed and efficiency. Slower presets = smaller files.
          </p>
        </div>

        {/* Quality Level */}
        <div>
          <label className="block text-sm font-medium mb-2">Quality Level</label>
          <select
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-white"
          >
            <option value="high">High Quality (CRF 18)</option>
            <option value="medium">Medium Quality (CRF 23)</option>
            <option value="low">Low Quality (CRF 28)</option>
            <option value="custom">Custom CRF Value</option>
          </select>
          <p className="mt-1 text-sm text-gray-500">
            Lower CRF = higher quality but larger file size
          </p>
        </div>

        {/* Resolution */}
        <div>
          <label className="block text-sm font-medium mb-2">Output Resolution</label>
          <select
            value={resolution}
            onChange={(e) => setResolution(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-white"
          >
            <option value="original">Original Resolution</option>
            <option value="1080p">1080p (1920x1080)</option>
            <option value="720p">720p (1280x720)</option>
            <option value="480p">480p (854x480)</option>
            <option value="360p">360p (640x360)</option>
          </select>
        </div>

        {/* Advanced Options Toggle */}
        <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
      {/* ... your existing basic options ... */}
      
      <AdvancedSettingsToggle 
        isOpen={showAdvanced}
        onToggle={() => setShowAdvanced(!showAdvanced)}
      />
      
      <AdvancedOptions isVisible={showAdvanced} />
    </div>

        {/* Start Compression Button */}
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Start Compression
        </button>
      </div>
    </div>
  );
};

const VideoUploader = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    const videoFiles = droppedFiles.filter(file => 
      file.type.startsWith('video/')
    );

    if (videoFiles.length) {
      setFiles(videoFiles);
    }
  }, []);

  const handleFileInput = useCallback((e) => {
    const selectedFiles = Array.from(e.target.files);
    const videoFiles = selectedFiles.filter(file => 
      file.type.startsWith('video/')
    );

    if (videoFiles.length) {
      setFiles(videoFiles);
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div
        className={`relative border-4 border-dashed rounded-xl p-8 text-center transition-all duration-200 ease-in-out
          ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Upload className="h-16 w-16 mx-auto mb-4 text-blue-500" />
        <p className="text-xl font-medium mb-2">
          {files.length > 0 
            ? `Selected: ${files[0].name}`
            : "Drag and drop your video here"
          }
        </p>
        <p className="text-gray-500 mb-4">or</p>
        <label className="cursor-pointer">
          <input
            type="file"
            className="hidden"
            accept="video/*"
            onChange={handleFileInput}
          />
          <span className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
            Choose File
          </span>
        </label>
      </div>

      <CompressionOptions 
        isVisible={files.length > 0}
        videoInfo={files[0]}
      />
    </div>
  );
};

export default VideoUploader;