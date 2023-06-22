## Schedule Activities - Agriculture

[GitHub Repository](https://github.com/ilanlavi22/activity-scheduler-agriculture)
<br>
[Live preview / Vercel](https://activity-scheduler-agriculture.vercel.app)

### <ins>Installation</ins>

1. Clone the repository
2. Install the dependencies

```plaintext
Run `npm install`, `yarn install`, or `pnpm i`
```

3. Getting an API Key:

   To use the weather data in this project, you'll need to obtain an API key from [OpenWeatherMap website](https://openweathermap.org/).

4. Setting Up API Key

   In the root directory of your project, create a new file named `.env.local` if it doesn't already exist. Add the following line replacing `YOUR_API_KEY` with the actual API key you obtained from OpenWeatherMap:

```plaintext
OWM_API_KEY=YOUR_API_KEY
```

5. To run locally on development mode just type npm run dev at terminal inside the folder where package.json resides.

```plaintext
npm run dev
```

### <ins>Information</ins>

- Developed using React/Next.js (version 13.4.6) and
- Tailwind CSS

### <ins>Tasks</ins>

- ✅ A display should show all scheduled activities and weather summery on the front page.
- ✅ User should be able to schedule a new activity:

  - 4 activity types are allowed: Mowing, Fertilisation, Irrigation and Aeration.
  - Each activity has a date and time associated with it.
  - Each activity has a "task performer/user" associated with it. These can be - John, Tom or Tony.
  - Each activity is associated with one of 3 Pitches (Pitch 1, 2 and 3) and there can only be one activity done on a pitch at one time.

- ✅ User should be able to change the details of the activities (e.g. change the time).
- ✅ User should be able to delete the activity.
- ✅ The weather data should show current temperature and have some indication about rain/precipitation.
- ✅ The display should be responsive.

### <ins>Followup Questions</ins>

**Implementation:**

For the implementation, I have opted to utilize React/Next.js due to its various advantages. These include server-side rendering (SSR/IRS) for improved performance, enhanced SEO capabilities, and faster initial page loads.

**Suggested Improvements:**<br>
To enhance the overall functionality, I recommend the following improvements:

- Incorporate activity duration to effectively handle pitch stages and time overlaps.
- Introduce an activity completed state, which can be optionally hidden (e.g., show/hide completed tasks).

**Future Additions:**
To further enhance the application moving forward I would consider implementing the following additions:

- Integrate a backend server, such as MongoDB/Prisma, to manage the activities, pitches, and duration.
- Implement backend validation, schema validation, and per-field validation to ensure data integrity.
- Consider utilizing a state management solution like react-query or redux instead of the current useContext Hook.
- Introduce Jest for comprehensive testing of the application's components and functionality (unit testing).
- Refactor or divide "long components" into smaller, more manageable components, distinguishing between low-level and high-level components.

### <ins>Contributing</ins>

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

Please ensure that your pull request adheres to the following guidelines:

- Explain the purpose and context of your changes.
- Keep the code style consistent with the existing codebase.
- Include documentation and relevant tests if applicable.

For major changes, it is recommended to open an issue first to discuss your ideas and obtain feedback.
