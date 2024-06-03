# Shop Sync

## Installation Guide

### Prerequisites
Ensure you have the following tools and technologies installed:
1. [Node.js](https://nodejs.org/)
2. [WampServer](http://www.wampserver.com/en/)
3. [Composer](https://getcomposer.org/)
4. A code editor (optional, e.g., [VS Code](https://code.visualstudio.com/))

### Installation Steps

1. **Clone the Repository**
   - Navigate to [GitHub Repository](https://github.com/renoangelobanderlipe/shop-sync)
   - Copy the repository URL: `https://github.com/renoangelobanderlipe/shop-sync`
   - Open your terminal and run:
     ```sh
     git clone https://github.com/renoangelobanderlipe/shop-sync
     ```
   - Navigate to the project directory:
     ```sh
     cd shop-sync
     ```

2. **Set Up Environment Variables**
   - Copy the example environment file:
     ```sh
     cp .env.example .env
     ```

3. **Install Backend Dependencies**
   - Run Composer to install PHP dependencies:
     ```sh
     composer install
     ```

4. **Generate Application Key**
   - After Composer has installed all dependencies, generate the application key:
     ```sh
     php artisan key:generate
     ```

5. **Install Frontend Dependencies**
   - Install Node.js dependencies:
     ```sh
     npm install
     ```

6. **Configure Environment Variables**
   - Obtain the `.env` file provided by Reno.
   - Replace the contents of your local `.env` file with the provided one.
   - The `.env` file is located in the root directory of the project.

### Additional Setup

1. **Modify WampServer Settings**
   - After installing WampServer, open File Explorer.
   - Go to `This PC`.
   - Open the `Windows` directory.
   - Navigate to `wamp64\bin\php\php8.3.0`.
   - Open `php.ini` in a text editor.
   - Search for `upload_max_filesize` and increase the limit (e.g., `50M`).
   - Search for `post_max_size` and increase the limit (e.g., `30M`).
   - This will allow you to upload larger files during local development.

7. **Start WampServer**
   - Open WampServer and wait until it is fully operational.

8. **Run Database Migrations and Seeders**
   - In your project terminal, run the following commands to set up the database:
     ```sh
     php artisan migrate
     ```
     - If prompted, select "yes" to confirm.
   - Seed the database with dummy data:
     ```sh
     php artisan db:seed
     ```

9. **Start Development Servers**
   - Start the backend server:
     ```sh
     php artisan serve
     ```
   - Start the frontend development server:
     ```sh
     npm run dev
     ```

10. **Happy Coding!**
   - You are now ready to start developing with Shop Sync!
