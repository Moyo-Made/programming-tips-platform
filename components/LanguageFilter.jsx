export default function LanguageFilter({ languages, selectedLanguage, onLanguageChange }) {
  return (
    <select
      id="language"
      name="language"
      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      value={selectedLanguage}
      onChange={(e) => onLanguageChange(e.target.value)}
    >
      <option value="">All Languages</option>
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
}