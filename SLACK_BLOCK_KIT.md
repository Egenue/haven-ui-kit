# Haven Slack Bot - Block Kit JSON

## 1. Anonymous Reporting Modal
Triggered by `/report` slash command

```json
{
  "type": "modal",
  "callback_id": "report_submission",
  "title": {
    "type": "plain_text",
    "text": "🌸 Haven Report"
  },
  "submit": {
    "type": "plain_text",
    "text": "Submit Anonymously"
  },
  "close": {
    "type": "plain_text",
    "text": "Cancel"
  },
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*You're in a safe space.* This report is completely anonymous."
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "input",
      "block_id": "incident_type",
      "label": {
        "type": "plain_text",
        "text": "What happened?"
      },
      "element": {
        "type": "static_select",
        "action_id": "type_select",
        "placeholder": {
          "type": "plain_text",
          "text": "Select a category"
        },
        "options": [
          {
            "text": {
              "type": "plain_text",
              "text": "🚫 Harassment"
            },
            "value": "harassment"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "⚖️ Discrimination"
            },
            "value": "discrimination"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "💬 Verbal Abuse"
            },
            "value": "verbal_abuse"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "😔 Bullying"
            },
            "value": "bullying"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "📝 Other"
            },
            "value": "other"
          }
        ]
      }
    },
    {
      "type": "input",
      "block_id": "incident_description",
      "label": {
        "type": "plain_text",
        "text": "Tell us what happened"
      },
      "element": {
        "type": "plain_text_input",
        "action_id": "description",
        "multiline": true,
        "placeholder": {
          "type": "plain_text",
          "text": "Share as much or as little as you're comfortable with. Your identity is protected."
        }
      }
    },
    {
      "type": "input",
      "block_id": "incident_date",
      "label": {
        "type": "plain_text",
        "text": "When did this happen?"
      },
      "element": {
        "type": "datepicker",
        "action_id": "date_select",
        "placeholder": {
          "type": "plain_text",
          "text": "Select a date"
        }
      },
      "optional": true
    },
    {
      "type": "input",
      "block_id": "severity",
      "label": {
        "type": "plain_text",
        "text": "How urgent is this?"
      },
      "element": {
        "type": "static_select",
        "action_id": "severity_select",
        "placeholder": {
          "type": "plain_text",
          "text": "Choose priority"
        },
        "options": [
          {
            "text": {
              "type": "plain_text",
              "text": "🔴 High - Immediate attention needed"
            },
            "value": "high"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "🟡 Medium - Should be addressed soon"
            },
            "value": "medium"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "🟢 Low - For awareness"
            },
            "value": "low"
          }
        ]
      }
    },
    {
      "type": "context",
      "elements": [
        {
          "type": "mrkdwn",
          "text": "🔒 Your submission is encrypted and anonymous. No identifying information is stored."
        }
      ]
    }
  ]
}
```

---

## 2. Private Nudge Message
Only visible to the person who sends `/report`

```json
{
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "👋 *Taking the first step takes courage.*\n\nYou're about to open a safe, anonymous reporting channel. Your identity is fully protected—we'll never track or store who you are."
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*What happens next?*\n• Your report is reviewed by a dedicated HR team\n• You can share as much or as little as you want\n• All responses are confidential and supportive\n• You're not alone in this 💜"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "context",
      "elements": [
        {
          "type": "mrkdwn",
          "text": "Need support now? DM @haven or call the Employee Assistance hotline."
        }
      ]
    }
  ]
}
```

---

## 3. Post-Submission Confirmation
Ephemeral message (only sender sees it)

```json
{
  "response_type": "ephemeral",
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "✅ *Your report has been submitted anonymously.*"
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "Thank you for trusting us. Your report (#R047) is being reviewed by our safety team.\n\n*What to expect:*\n• You'll receive updates via DM from @haven\n• Average response time: 4-6 hours\n• Your anonymity is always protected\n\nYou're not alone. We're here for you. 💜"
      }
    },
    {
      "type": "actions",
      "elements": [
        {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Talk to a counselor"
          },
          "style": "primary",
          "url": "https://example.com/counseling"
        },
        {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "View resources"
          },
          "url": "https://example.com/resources"
        }
      ]
    },
    {
      "type": "context",
      "elements": [
        {
          "type": "mrkdwn",
          "text": "🔒 This message is only visible to you"
        }
      ]
    }
  ]
}
```

---

## 4. First-Time DM Welcome
Sent when user first interacts with @haven bot

```json
{
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "🌸 *Welcome to Haven*\n\nHi there! I'm Haven, your confidential workplace safety companion."
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Here's how I can help:*\n\n• `/report` - Submit an anonymous safety report\n• `/resources` - Access support resources\n• `/status` - Check your report status\n• Just DM me anytime if you need to talk"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Your safety matters.*\n\nEvery conversation here is private and encrypted. I'm here to listen, support, and connect you with help when you need it.\n\nYou deserve to feel safe at work. Let's make that happen together. 💜"
      }
    },
    {
      "type": "actions",
      "elements": [
        {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "🌸 Submit a report"
          },
          "style": "primary",
          "value": "open_report"
        },
        {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "📚 View resources"
          },
          "value": "view_resources"
        }
      ]
    },
    {
      "type": "context",
      "elements": [
        {
          "type": "mrkdwn",
          "text": "🔒 All messages are confidential and never shared without your consent"
        }
      ]
    }
  ]
}
```

---

## Implementation Notes

### Slash Commands Setup
In Slack App settings, create these slash commands:

| Command | Description | Usage Hint |
|---------|-------------|------------|
| `/report` | Submit anonymous safety report | Open secure reporting form |
| `/resources` | View support resources | Get help and resources |
| `/status` | Check report status | View your submission status |

### Interactivity & Shortcuts
- Enable Interactivity in Slack App settings
- Set Request URL to your backend endpoint (e.g., `https://your-app.com/slack/interactivity`)
- Handle `view_submission` payload for modal submissions
- Handle `block_actions` for button clicks

### Event Subscriptions
Subscribe to these events:
- `app_mention` - When @haven is mentioned
- `message.im` - Direct messages to the bot

### Response URLs
Store these securely for follow-up messages:
- `response_url` from slash commands (valid for 30 minutes)
- Use chat.postEphemeral for private responses
- Use chat.postMessage to DM users via bot

---

## Testing Commands

```bash
# Test modal trigger
POST /slack/commands
{
  "command": "/report",
  "user_id": "U123456",
  "trigger_id": "12345.67890"
}

# Test ephemeral message
POST /slack/ephemeral
{
  "channel": "C123456",
  "user": "U123456",
  "text": "Test confirmation message"
}
```
