# PostGenius Backend

A Django REST API backend for PostGenius, a comprehensive social media automation platform with AI-powered content generation.

## Features

- **User Authentication & Management** - JWT-based authentication with team management
- **Social Media Platform Integration** - OAuth integration for multiple platforms (implemented incrementally)
- **AI Content Generation** - OpenAI-powered content creation with Google API integration
- **Content Management** - Drafts, approval queue, scheduling, templates
- **Analytics & Reporting** - Performance metrics, engagement tracking
- **Calendar & Scheduling** - Visual calendar, optimal timing, bulk scheduling
- **Team Collaboration** - Multi-user workspaces, role management
- **Billing & Subscriptions** - Multiple tiers, usage tracking, payment processing

## Quick Start

### Prerequisites

- Python 3.10+
- PostgreSQL (optional, SQLite used by default)
- Redis (for background tasks)

### Installation

1. **Clone and navigate to the backend directory:**
   ```bash
   cd postgenius_backend
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your actual API keys and configuration
   ```

5. **Run migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Create a superuser:**
   ```bash
   python manage.py createsuperuser
   ```

7. **Start the development server:**
   ```bash
   python manage.py runserver
   ```

The API will be available at `http://localhost:8000/`

## API Documentation

Once the server is running, you can access:
- **Swagger UI**: `http://localhost:8000/swagger/`
- **ReDoc**: `http://localhost:8000/redoc/`
- **Admin Panel**: `http://localhost:8000/admin/`

## Project Structure

```
postgenius_backend/
├── manage.py
├── requirements.txt
├── .env.example
├── postgenius/                 # Main Django project
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── apps/                       # Django applications
│   ├── auth_app/              # User authentication
│   ├── social_platforms/     # Social media integrations
│   ├── content_management/   # Content handling
│   ├── ai_generation/        # AI content generation
│   ├── analytics_app/        # Analytics and reporting
│   ├── scheduling_app/       # Content scheduling
│   ├── team_management/      # Team collaboration
│   ├── billing_app/          # Subscription management
│   └── notifications_app/    # Notification system
├── utils/                     # Utility functions
├── static/                    # Static files
├── media/                     # Media files
└── logs/                      # Log files
```

## Environment Variables

Key environment variables you need to configure:

```bash
# Required
SECRET_KEY=your-secret-key
DEBUG=True
DATABASE_URL=sqlite:///db.sqlite3

# AI Services
OPENAI_API_KEY=your-openai-key
GOOGLE_API_KEY=AIzaSyA251ko5t70OXunXLtlm_GWfZdIqMg692M

# Social Media Platforms (Phase 1)
LINKEDIN_CLIENT_ID=your-linkedin-client-id
LINKEDIN_CLIENT_SECRET=your-linkedin-client-secret
TWITTER_API_KEY=your-twitter-api-key
TWITTER_API_SECRET=your-twitter-api-secret
INSTAGRAM_CLIENT_ID=your-instagram-client-id
INSTAGRAM_CLIENT_SECRET=your-instagram-client-secret

# Payment Processing
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key

# Email Service
SENDGRID_API_KEY=your-sendgrid-key
```

## Social Media Platform Implementation

The social media platforms are implemented in phases:

- **Phase 1**: LinkedIn, Instagram, Twitter
- **Phase 2**: Facebook, TikTok, YouTube
- **Phase 3**: Pinterest, Threads, Snapchat
- **Phase 4**: WhatsApp, Telegram, Reddit

## Development

### Running Tests
```bash
python manage.py test
```

### Code Quality
```bash
black .
flake8 .
isort .
```

### Database Management
```bash
# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Reset database (development only)
python manage.py flush
```

## API Endpoints

### Authentication (`/api/auth/`)
- `POST /register/` - User registration
- `POST /login/` - User login
- `POST /logout/` - User logout
- `POST /refresh/` - Refresh JWT token
- `GET /profile/` - Get user profile
- `PUT /profile/` - Update user profile

### Social Platforms (`/api/platforms/`)
- `GET /connected-accounts/` - List connected accounts
- `POST /connect-account/` - Connect new account
- `PUT /connected-accounts/{id}/` - Update account
- `DELETE /connected-accounts/{id}/` - Disconnect account

### Content Management (`/api/content/`)
- `GET /posts/` - List posts
- `POST /posts/` - Create post
- `GET /posts/{id}/` - Get post details
- `PUT /posts/{id}/` - Update post
- `DELETE /posts/{id}/` - Delete post
- `POST /posts/{id}/approve/` - Approve post
- `POST /posts/{id}/reject/` - Reject post

### AI Generation (`/api/ai/`)
- `POST /generate-content/` - Generate AI content
- `GET /generation-history/` - Get generation history
- `POST /enhance-content/` - Enhance existing content
- `GET /trending-topics/` - Get trending topics
- `POST /generate-image/` - Generate AI images

### Analytics (`/api/analytics/`)
- `GET /dashboard-stats/` - Get dashboard statistics
- `GET /engagement-metrics/` - Get engagement metrics
- `GET /platform-performance/` - Get platform performance
- `GET /content-performance/` - Get content performance
- `GET /audience-insights/` - Get audience insights

### Scheduling (`/api/scheduling/`)
- `GET /calendar/` - Get calendar view
- `POST /schedule-post/` - Schedule a post
- `PUT /scheduled-posts/{id}/` - Update scheduled post
- `DELETE /scheduled-posts/{id}/` - Cancel scheduled post
- `GET /optimal-times/` - Get optimal posting times

### Team Management (`/api/team/`)
- `GET /team-members/` - List team members
- `POST /invite-member/` - Invite team member
- `PUT /team-members/{id}/` - Update team member
- `DELETE /team-members/{id}/` - Remove team member

### Billing (`/api/billing/`)
- `GET /subscription/` - Get current subscription
- `POST /upgrade-plan/` - Upgrade subscription plan
- `GET /usage/` - Get usage statistics
- `GET /billing-history/` - Get billing history

## Contributing

1. Follow PEP 8 guidelines
2. Use type hints for all functions
3. Write comprehensive docstrings
4. Write tests for new features
5. Update documentation

## License

MIT License - see LICENSE file for details
